var navMenu = document.querySelector(".nav-menu");
var navMenuOffcanvas = document.querySelector(".nav-offcanvas");
function navMenuAnimation() {
  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("navmenuactive");
    if (navMenu.classList.contains("navmenuactive")) {
      gsap.to(navMenuOffcanvas, {
        top: "10%",
        duration: 1,
        delay: 0.4,
        ease: Power1,
      });
      gsap.to(navMenu, {
        textContent: "( CLOSE )",
        duration: 1,
        delay: 0.4,
        ease: Power1,
      });
    } else {
      gsap.to(navMenuOffcanvas, {
        marginTop: "-100%",
        duration: 1,
        delay: 0.4,
        ease: Power1,
      });
      gsap.to(navMenu, {
        textContent: "( MENU )",
        duration: 1,
        delay: 0.4,
        ease: Power1,
      });
    }
  });
}
navMenuAnimation();
