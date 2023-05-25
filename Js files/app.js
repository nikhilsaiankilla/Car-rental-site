
// Navbar styling
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    // adding hide class to nav list to open and close
    navBar.classList.toggle("hide");
})


