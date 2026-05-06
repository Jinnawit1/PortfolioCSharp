function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (!navLinks) {
        return;
    }

    if (navLinks.className.indexOf("open") >= 0) {
        navLinks.className = navLinks.className.replace(" open", "");
    } else {
        navLinks.className += " open";
    }
}
