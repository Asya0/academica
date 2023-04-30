// burger menu 
const iconMenu = document.querySelector('.burger');
const burgerMenu = document.querySelector(".menu");
const body = document.body;

/* open menu */
iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    body.classList.toggle("lock");
});
const closePopup = () => {
    iconMenu.classList.remove("active");
    burgerMenu.classList.remove("active");
    body.classList.remove("lock");
};
/* close menu on link click */
document.querySelectorAll(".menu-item_text").forEach((link) => {
    link.addEventListener("click", () => {
        closePopup();
    });
});

/* close on click outside the menu */
document.onclick = function (e) {
    if (
        !burgerMenu.contains(e.target) &&
        !e.target.parentNode.contains(iconMenu)
    ) {
        closePopup();
    }
};