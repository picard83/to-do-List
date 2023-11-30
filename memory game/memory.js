const container = document.querySelector(".container");
let topRow = document.querySelector(".toprow");
let botttomRow = document.querySelector(".bottomrow");
let card = document.querySelectorAll(".card");

//getting each individual card/btn /////

function individualCard() {
  for (let i = 0; i < card.length; i++) {
    let solo = card[i];
    // solo.style.backgroundColor = "red";
    solo.addEventListener("click", function (e) {
      let targetCard = e.target;
      console.log(targetCard);
      targetCard.classList.toggle("card1");
    });
  }
}
individualCard();
