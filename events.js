// document.addEventListener("DOMContentLoaded", function () {
//   let changeMe = document.querySelector("#change_heading");
//   changeMe.innerHTML = "Hello World!";
//   //////////////////////////////////
//   var newDiv = document.createElement("div");
//   //
//   newDiv.className = "purple";
//   //
//   newDiv.style.backgroundColor = "purple";
//   //
//   const section1 = document.querySelector("section");
//   section1.appendChild(newDiv);
//   //END OF PART 1//
//   ////////////////////////////////////////////////////
//   // START OF RACING GAME //
//   const startRaceBtn = document.querySelector(".btn");
//   let car1 = document.querySelector(".car1");
//   let car2 = document.querySelector(".car2");

//   /////

//   startRaceBtn.addEventListener("click", function () {
//     let pageWidth = window.innerWidth;
//     let randomMath = Math.random();
//     console.log(randomMath);
//   });
// });
var button = document.querySelector("button");
var car1 = document.querySelector(".car1");
var car2 = document.querySelector(".car2");
car1.style.marginLeft = 0;
car2.style.marginLeft = 0;

function reset(car1, car2) {
  clearTimeout(car1.timer);
  clearTimeout(car2.timer);
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;
  button.disabled = false;
}

button.addEventListener("click", function (event) {
  button.disabled = true;
  car1.timer = setInterval(function () {
    car1.style.marginLeft =
      parseInt(car1.style.marginLeft) + Math.random() * 60 + "px";
    if (parseInt(car1.style.marginLeft) > window.innerWidth) {
      alert("Car 1 wins!");
      reset(car1, car2);
    }
  }, 60);

  car2.timer = setInterval(function () {
    car2.style.marginLeft =
      parseInt(car2.style.marginLeft) + Math.random() * 60 + "px";
    if (parseInt(car2.style.marginLeft) > window.innerWidth) {
      alert("Car 2 wins!");
      reset(car1, car2);
    }
  }, 60);
});

//////////////////////////////////////////
//hints from nick//
// Use window.innerWidth to get the whole page width,

// On button click:
// you should have 2 divs and increase their marginleft randomly using Math.random, the first div marginLeft > window.innerWidth wins.
