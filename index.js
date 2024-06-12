var nav = document.querySelector("nav");
var navMenuOffcanvas = document.querySelector(".nav-offcanvas");
var navMenu = document.querySelector(".nav-menu");
var navClose = document.querySelector(".nav-close");
var navOffcanvasLink = document.querySelectorAll(".nav-offcanvas-link");
var navOffcanvasLinkHome = document.querySelectorAll(".home");

function navMenuAnimation() {
  navMenu.addEventListener("click", () => {
    gsap.to(navMenu, {
      top: "-50%",
      transform: "translate(0%, 50%)",
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      ease: Power2,
    });
    gsap.to(navClose, {
      top: "50%",
      transform: "translate(0%, -50%)",
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
      ease: Power2,
    });

    gsap.to(nav, {
      backgroundColor: "#bcbeb3",
    });

    gsap.to(navMenuOffcanvas, {
      top: "10%",
      duration: 0.2,
      delay: 0.2,
      ease: Power2,
    });
  });
  navClose.addEventListener("click", () => {
    gsap.to(navClose, {
      top: "100%",
      transform: "translate(0%, -100%)",
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      ease: Power2,
    });

    gsap.to(navMenu, {
      top: "50%",
      transform: "translate(0%, -50%)",
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
      ease: Power2,
    });
    gsap.to(nav, {
      backgroundColor: "rgb(231, 228, 229, 1)",
    });
    gsap.to(navMenuOffcanvas, {
      top: "-100%",
      duration: 0.2,
      delay: 0.2,
      ease: Power2,
    });
  });
}
navMenuAnimation();

// navOffcanvasLink[0].addEventListener("click", function () {
//   gsap.to(navOffcanvasLinkHome, {
//     transform: "rotateY(0deg)",
//     scale: 1,
//     opacity: 1,
//     duration: 1,
//     delay: 0.3,
//   });
// });


// function navOffcanvasLinksAnimation() {
//   navOffcanvasLink.forEach(function (a) {
//     a.addEventListener("mouseenter", function () {
//       gsap.to(navOffcanvasLink,{
//         transform:"rotateY(20deg)",
//         opacity: 0,
//         duration: 0.5,
//         delay: 0.3,
//         ease: Power2,
//       })
//     });
//     a.addEventListener("mouseleave", function () {
//       gsap.to(navOffcanvasLink,{
//         opacity: 1,
//         duration: 0.5,
//         delay: 0.3,
//         ease: Power2,
//       })
//     });
//   });
// }
// navOffcanvasLinksAnimation();
