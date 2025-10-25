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
  {
    url: "0.jpg",
  },

  {
    url: "1.jpg",
  },

  {
    url: "2.jpg",
  },

  {
    url: "3.jpg",
  },
  {
    url: "4.jpg",
  },
  {
    url: "5.jpg",
  },
  {
    url: "6.jpg",
  },
  {
    url: "7.jpg",
  },
  {
    url: "8.jpg",
  },
  {
    url: "9.jpg",
  },
  {
    url: "10.jpg",
  },

  {
    url: "11.jpg",
  },

  {
    url: "12.jpg",
  },
  {
    url: "13.jpg",
  },
  {
    url: "14.jpg",
  },
  {
    url: "15.jpg",
  },
  {
    url: "16.jpg",
  },
  {
    url: "17.jpg",
  },
  {
    url: "18.jpg",
  },
  {
    url: "19.jpg",
  },
  {
    url: "20.jpg",
  },

  {
    url: "21.jpg",
  },

  {
    url: "22.jpg",
  },
  {
    url: "23.jpg",
  },
  {
    url: "24.jpg",
  },
  {
    url: "25.jpg",
  },
  {
    url: "26.jpg",
  },
  {
    url: "27.jpg",
  },
  {
    url: "28.jpg",
  },
  {
    url: "29.jpg",
  },
  {
    url: "30.jpg",
  },
  {
    url: "31.jpg",
  },
  {
    url: "32.jpg",
  },
  {
    url: "33.jpeg",
  },
  {
    url: "34.jpeg",
  },
  {
    url: "35.jpeg",
  },
  {
    url: "36.jpeg",
  },
  {
    url: "37.jpeg",
  },
  {
    url: "38.jpeg",
  },
  {
    url: "39.jpeg",
  },
  {
    url: "40.jpeg",
  },

  {
    url: "41.jpeg",
  },

  {
    url: "42.jpeg",
  },
  {
    url: "43.jpeg",
  },
  {
    url: "44.jpeg",
  },
  {
    url: "45.jpeg",
  },
  {
    url: "46.jpeg",
  },
  {
    url: "47.jpeg",
  },
  {
    url: "48.jpeg",
  },
  {
    url: "49.jpeg",
  },
  {
    url: "50.jpeg",
  },
];
function mainhtanimation() {
  mainH1.forEach(function (b) {
    b.addEventListener(
      "mousemove",
      throttleFunction((dets) => {
        try {
          var imagesURLRandomNum = Math.floor(
            Math.random() * imagesURLArray.length
          );

          console.log(imagesURLRandomNum)
          var div = document.createElement("div");
          div.classList.add("div");
          div.style.left = dets.clientX + "px";
          div.style.top = dets.clientY + "px";
          var img = document.createElement("img");

          if (imagesURLRandomNum > 32) {
            img.setAttribute("src", `./images/${imagesURLRandomNum}` + ".jpeg");
          } else {
            img.setAttribute("src",  `./images/${imagesURLRandomNum}` + ".jpg");
          }

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
          }, 1200);
        } catch (error) {
          console.log(error);
        }
      }, 80)
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
