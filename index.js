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

var mainH1 = document.querySelectorAll(".main-heading > h1");
const btn = document.querySelector("#throttle");

var throttleFunction = (func, delay) => {
  var prev = 0;
  return (...args) => {
    var now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

throttleFunction();

var imagesURLArray = [
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MXwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MXwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MXwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1770920565562-95db610151a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1773736993622-2358638cecd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1772289935516-56551a7c0958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1772290617722-8f61e2672adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1772436756247-8c15cb5149f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwN3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772290226349-6998c468c549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772966971398-620d4bde08e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1770873263537-fbb8d39b6103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772955527473-14ab0ae328af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772891752773-600d0e2fbbd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1772651471600-4f1ef9fe1f73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772730669761-2369bb003e15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMnw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772656962291-f7d591d88a88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772621089845-26fd22802a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1771677931350-67207d86caae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772392174256-ae0ceb14ca99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1Mnw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772436756233-7752e9eb1d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1N3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1754211765093-55135deabfa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772290776039-f69b60d78aa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2MXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1767285897869-8ba77971d90f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3NHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1769751639837-bc9195bf518e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2OXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772113572057-30ecc9ced275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3M3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772113572057-30ecc9ced275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3M3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1687255263750-feb3c46a4059?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4MHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772289239033-ea8155b3cf2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1739545325540-cf2c781d0a1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1769251847366-6b49e30d31e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1690522330990-250e9a828c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1773176637844-afc26168ba78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1774202906831-771ceaee23c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1771931822649-07ed87d80c30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5M3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1771272421831-05d514ea0769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwMXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1771607068123-732a746b2edd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxMHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1771784137213-4d178f5741b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwOHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1771428999876-0a04cd3497a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxN3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1771250824234-fc8248313204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxNXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1771777400760-f4a4bb561c53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxMnw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1771512198657-603100c5aba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxNnw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1769882199966-9afc908cd379?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyNXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
];

function mainhtanimation() {
  mainH1.forEach(function (b) {
    b.addEventListener(
      "mousemove",
      throttleFunction((dets) => {
        try {
          var imagesURLRandomNum = Math.floor(
            Math.random() * imagesURLArray.length,
          );

          var div = document.createElement("div");
          div.classList.add("div");
          div.style.left = dets.clientX + "px";
          div.style.top = dets.clientY + "px";
          var img = document.createElement("img");

          img.setAttribute("src", imagesURLArray[imagesURLRandomNum]);

          div.appendChild(img);
          document.body.appendChild(div);

          gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: 0.6,
          });
          gsap.to(img, {
            y: "100%",
            ease: Power2,
            delay: 0.6,
          });

          document.body.style.overflow = "hidden";

          setTimeout(() => {
            div.remove();
          }, 1100);
        } catch (error) {
          console.log(error);
        }
      }, 80),
    );
  });
}
mainhtanimation();
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
