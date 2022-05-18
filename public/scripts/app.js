const menuBtnElement = document.getElementById("btnMenu");
const openMenuElement = document.getElementById("btnOpen");
const closeMenuElement = document.getElementById("btnClose");
const navMenuElement = document.getElementById("navMenu");

menuBtnElement.addEventListener("click", () => {
    openMenuElement.classList.toggle("hidden");
    closeMenuElement.classList.toggle("hidden");
    navMenuElement.classList.toggle("show");
})
