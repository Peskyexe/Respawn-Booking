// const { use } = require("react");

const menu_close_button = document.querySelector(".menuCloseButton")
const menu_open_button = document.querySelector(".menuOpenButton")

menu_close_button.addEventListener("click", hideSidebar)
menu_open_button.addEventListener("click", showSidebar)

const booking_book_button = document.querySelector("#booking-button")

booking_book_button.addEventListener("click", inputsToJson)

function showSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "flex";
}

function hideSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "none";
}

function inputsToJson() {
	const user_name = document.querySelector("#form-navn");
	const user_adress = document.querySelector("#form-adress");
	const user_phone = document.querySelector("#form-phone");
	const user_email = document.querySelector("#form-email");

	const user_inputs = [
		name = user_name.value,
		adress = user_adress.value,
		phone = user_phone.value,
		email = user_email.value
	];

	userJsonString = JSON.stringify(user_inputs)

	console.log(userJsonString);
}