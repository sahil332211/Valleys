let sidebar1 = document.getElementById("mobile-menu");
let sidebar = false;

function toggle() {
    if (sidebar) {
        sidebar1.classList.add("translate-x-full");
        sidebar1.classList.remove("translate-x-0");
        sidebar = false;
    } else {
        sidebar1.classList.remove("translate-x-full");
        sidebar1.classList.add("translate-x-0");
        sidebar = true;
    }
}