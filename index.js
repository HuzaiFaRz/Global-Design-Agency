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
      backgroundColor: "#bcbeb3",
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
      backgroundColor: "rgb(231, 228, 229, 1)",
      duration: 0.2,
      delay: 0.2,
      ease: Power2,
    });
  });
}
navMenuAnimation();

var mainHeading = document.querySelector(".main-heading");

mainHeading.addEventListener("mousemove", function (dets) {
  var div = document.createElement("div");
  div.setAttribute("class", "div");
  var img = document.createElement("img");
  img.setAttribute("class", "img");
  img.setAttribute("src", "20230128_184252_mfnr.jpg");
  div.appendChild(img);

  div.style.left = dets.clientX + "px";
  div.style.top = dets.clientY + "px";

  document.body.appendChild(div);

  console.log(div);
  setTimeout(() => {
    div.remove();
  }, 200);
});

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
