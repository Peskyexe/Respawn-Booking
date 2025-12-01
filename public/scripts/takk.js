// For det meste Co Pilot [
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const firstname = params.get('firstname') || '';
    const pass = params.get('pass') || '';
    const email = params.get('email') || '';

    const passMap = {
        'saturday-pass': 'Lørdags pass',
        'sunday-pass': 'Søndags pass',
        'weekend-pass': 'Uke pass'
    };

    const passText = passMap[pass] || pass || 'Ukjent pass';

    const fnameEl = document.getElementById('firstname-output');
    const passEl = document.getElementById('pass-output');
    const emailEl = document.getElementById('email-output');

    if (fnameEl) fnameEl.textContent = firstname;
    if (passEl) passEl.textContent = passText;
    if (emailEl) emailEl.textContent = email;
});
// ]