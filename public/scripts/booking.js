const form = document.getElementById("form")

form.addEventListener("submit", inputsToJson)

function inputsToJson(event) {
	event.preventDefault();
	
	const user_firstname = document.getElementById("firstname-input");
	const user_lastname = document.getElementById("lastname-input")
	const user_adress = document.getElementById("adress-input");
	const user_phone = document.getElementById("phone-input");
	const user_email = document.getElementById("email-input");
	
	const selectedPass = document.querySelector('input[name="pass"]:checked');
	const passType = selectedPass ? selectedPass.id : null;

	const user_inputs = {
		firstname: user_firstname.value,
		lastname: user_lastname.value,
		adress: user_adress.value,
		phone: user_phone.value,
		email: user_email.value,
		pass: passType
	};

	userJsonString = JSON.stringify(user_inputs)
	console.log(userJsonString);
	
	// Dette her var Co Pilot [
	fetch('/booking/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: userJsonString
	})
	.then(response => response.json())
	.then(data => {
		if (data.success) {
			// For det meste Co Pilot [
			const params = new URLSearchParams({
				firstname: user_firstname.value || "",
				pass: passType || "",
				email: user_email.value || ""
			});
			// ]
			window.location.href = '/booking/takk?' + params.toString();
		} else {
			alert('Det oppstod en feil ved innsending av bestillingen');
		}
	})
	.catch(error => {
		console.error('Error:', error);
		alert('Det oppstod en feil ved innsending av bestillingen');
	});
	// ]
}