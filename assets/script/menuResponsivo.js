function responsive() {
  	let menu = document.getElementById("menu-id")
  	if (menu.className === "menu") {
    	menu.className += " responsive"
  	} else {
    	menu.className = "menu"
  	}
}