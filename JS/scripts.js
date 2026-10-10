const boutonMenu = document.querySelector(".button-menu"); /* Recherche 1er Element avec la class .button-menu */
const optionsMenu = document.querySelector(".menu-content"); /* Recherche 1er Element avec la class .menu-content */

boutonMenu.addEventListener("click", function () {
    const isOpen = optionsMenu.classList.toggle("is-open"); /* Ajoute/Retire class is-open */

    boutonMenu.setAttribute("aria-expanded", String(isOpen));
});