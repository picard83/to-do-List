let btn = document.querySelector("#new-qoute");
let quote = document.querySelector(".qoute");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: " fear nothing, but fear itself",
    person: "unknown",
  },
  {
    quote: " fear nothing, but fear itself",
    person: "muhammed ali",
  },
  {
    quote:
      "the best way to find yourself is to lose your self in the service of others",
    person: "gandhi",
  },
  {
    quote:
      " if you want to live a happy life, tie it to a goal,not people or things",
    person: "albert enstein",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
