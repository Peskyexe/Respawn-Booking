

(function(){
	function showSidebar(){
		const sidebar = document.querySelector(".sidebar");
		if(sidebar) sidebar.style.display = "flex";
	}

	function hideSidebar(){
		const sidebar = document.querySelector(".sidebar");
		if(sidebar) sidebar.style.display = "none";
	}

	window.showSidebar = showSidebar;
	window.hideSidebar = hideSidebar;
})();

