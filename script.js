const heroImage = document.querySelector(".hero-image")
const menu = document.querySelector(".menu")
const closeMenu = document.querySelector(".close-menu")
const nav = document.querySelector("nav")
const ul = document.querySelector("ul")

// change the image as the screen changes
function changeImage() {
    if (window.matchMedia('(min-width: 40em)').matches) {
        nav.classList.remove("active");
        document.body.classList.remove("shadow");
        heroImage.src = "assets/images/image-web-3-desktop.jpg";
    } else {
        heroImage.src = "assets/images/image-web-3-mobile.jpg";
    }
}

changeImage();

window.addEventListener("resize", changeImage);

// open the menu in mobile mode
menu.addEventListener("click", () => {
    nav.classList.add("active");
    document.body.classList.add("shadow");
});

// close the menu in mobile mode
closeMenu.addEventListener("click", () => {
    nav.classList.remove("active")
    document.body.classList.remove("shadow")
})

