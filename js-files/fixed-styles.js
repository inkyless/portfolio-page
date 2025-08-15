function createBurgerList(){
    const burgerBtn = document.getElementById("burger");
        const navLinks = document.querySelector("nav");
    burgerBtn.addEventListener("click", () => {

    navLinks.classList.toggle("hidden");
    });

}

document.addEventListener("DOMContentLoaded", function () {
  createBurgerList()
});