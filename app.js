let sidebar = document.querySelector(".nav-items");

document.querySelector(".menu").addEventListener("click", () => {
	sidebar.classList.toggle("show");
	}
)

document.querySelector(".close-menu").addEventListener("click", () => {
	sidebar.classList.remove("show");
	}
)

// closes the sidebar when anywhere apart from the sidebar is clicked
// document.addEventListener("click", (event) => {
	// if (!event.target.classList.contains("nav-items")) {
		// sidebar.classList.remove("show");
	// }
	// }
// )