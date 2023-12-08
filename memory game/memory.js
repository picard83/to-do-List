const container = document.querySelector(".container");
let topRow = document.querySelector(".toprow");
let botttomRow = document.querySelector(".bottomrow");
let card = document.querySelectorAll(".card");

//getting each individual card/btn /////

function individualCardTransformation() {
  for (let i = 0; i < card.length; i++) {
    let solo = card[i];
    // solo.style.backgroundColor = "red";
    solo.addEventListener("click", function (e) {
      let targetCard = e.target;
      if (targetCard.classList.contains("basketball")) {
        targetCard.classList.toggle("hidden");
        setTimeout(function () {
          targetCard.classList.toggle("hidden");
        }, 1000);
      } else if (targetCard.classList.contains("football")) {
        targetCard.classList.toggle("hidden2");
        setTimeout(function () {
          targetCard.classList.toggle("hidden2");
        }, 1000);
      } else if (targetCard.classList.contains("cricket")) {
        targetCard.classList.toggle("hidden3");
        setTimeout(function () {
          targetCard.classList.toggle("hidden3");
        }, 1000);
      } else if (targetCard.classList.contains("tennis")) {
        targetCard.classList.toggle("hidden4");
        setTimeout(function () {
          targetCard.classList.toggle("hidden4");
        }, 1000);
      }
    });
  }
}
individualCardTransformation();
