const container = document.querySelector(".container");
let topRow = document.querySelector(".toprow");
let botttomRow = document.querySelector(".bottomrow");
let card = document.querySelectorAll(".card");
let card1 = document.getElementById("card1");
let card4 = document.getElementById("card4");

console.log(card1);

//getting each individual card/btn /////

function individualCardTransformation() {
  for (let i = 0; i < card.length; i++) {
    let solo = card[i];

    // 1 Make it so the first card stays flipped permanently until a second card is clicked
    // 2 Check for matches
    // 3 Flip/reset cards if they are not a mat
    let firstClicked = false;
    solo.addEventListener("click", function (e) {
      let targetCard = e.target;

      firstClicked = !firstClicked;

      if (firstClicked) {
        if (card1 === card4) {
        } else {
          // wait 1 second
          // flip both cards back over
          // Increment number of tries
          setTimeout(function () {
            targetCard.classList.toggle("card");
          }, 1000);
        }
      }
    });
    // solo.addEventListener("click", function (e) {
    //   let targetCard = e.target;
    //   if (targetCard.classList.contains("basketball")) {
    //     targetCard.classList.toggle("hidden");
    //   } else if (targetCard.classList.contains("football")) {
    //     targetCard.classList.toggle("hidden2");
    //   } else if (targetCard.classList.contains("cricket")) {
    //     targetCard.classList.toggle("hidden3");
    //   } else if (targetCard.classList.contains("tennis")) {
    //     targetCard.classList.toggle("hidden4");
    //   }
    // });
  }
}
individualCardTransformation();
