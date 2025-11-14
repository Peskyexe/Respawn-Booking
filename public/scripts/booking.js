const menu_close_button = document.querySelector(".menuCloseButton")
const menu_open_button = document.querySelector(".menuOpenButton")

menu_close_button.addEventListener("click", hideSidebar)
menu_open_button.addEventListener("click", showSidebar)

function showSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "flex";
}

function hideSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "none";
}