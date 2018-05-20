var nav = document.getElementById("dropdown");
var icon = document.getElementById("dropdown-icon")
var isToggled = false;
nav.style.display = "none";

function toggleNav() {
    if (isToggled) {
        nav.style.display = "none";
        icon.innerHTML = "keyboard_arrow_down";
    } else {
        nav.style.display = "block";
        icon.innerHTML = "keyboard_arrow_up";
    }
    isToggled = !isToggled;
}
