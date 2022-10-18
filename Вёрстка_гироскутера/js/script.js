const menuButton = document.querySelector(".container2-short-menu")
const menu = document.querySelector(".container2-head-span")
const menu2 = document.querySelector(".choice")
const menuButton2 = document.querySelector(".m-menu2")
const all_products = document.querySelector("#all-products")
const giroscooters = document.querySelector("#giroscooter")

menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
});
menuButton2.addEventListener("click", () => {
    menu2.classList.toggle("is-open2");
});
