// function appendToString(str, str2) {
//   return str + str2;
// }
// console.log(appendToString("Hello", " World!"));

// function prependToString(str1, str2) {
//   return str2 + str1;
// }

// function charAt(str, num) {
//   if (num < str.length) {
//     return str[num];
//   } else {
//     return "";
//   }
// }

// function stringIncludes(word, char) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === char) {
//       return true;
//     }
//   }
//   return false;
// }

// function stringIndexOf(word, char) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// // function stringIndexOf(str, str2) {
// //   const newStr = str.map(function (letter, index) {
// //     str[index] = letter;
// //     return i;
// //   });
// // }
// // console.log(stringIndexOf("awesome", "a"));

// ///////////////////////////////////////////////

// // //testing
// // let checking = ["alex", "adrian", "bobby", "bill", "jack", "jill"];

// // const checkingLettera = checking.map(function (word, letter) {
// //   if (word[0] != letter) {
// //     return console.log("thats it !");
// //   }
// // });

// // // checkingLettera(check);
// // // checkingLettera("alex", "a");
// // BMIMark = 78 / (1.69 * 1.69);
// // BMIJhon = 92 / (1.95 * 1.95);
// // console.log(BMIMark, BMIJhon);

// ///EXERCISE PART 1
// let users = [
//   {
//     username: "larry",
//     email: "larry@foo.com",
//     yearsExperience: 22.1,
//     favoriteLanguages: ["Perl", "Java", "C++"],
//     favoriteEditor: "Vim",
//     hobbies: ["Fishing", "Sailing", "Hiking"],
//     hometown: {
//       city: "San Francisco",
//       state: "CA",
//     },
//   },
//   {
//     username: "jane",
//     email: "jane@test.com",
//     yearsExperience: 33.9,
//     favoriteLanguages: ["Haskell", "Clojure", "PHP"],
//     favoriteEditor: "Emacs",
//     hobbies: ["Swimming", "Biking", "Hiking"],
//     hometown: {
//       city: "New York",
//       state: "NY",
//     },
//   },
//   {
//     username: "sam",
//     email: "sam@test.com",
//     yearsExperience: 8.2,
//     favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
//     favoriteEditor: "Atom",
//     hobbies: ["Golf", "Cooking", "Archery"],
//     hometown: {
//       city: "Fargo",
//       state: "SD",
//     },
//   },
//   {
//     username: "anne",
//     email: "anne@test.com",
//     yearsExperience: 4,
//     favoriteLanguages: ["C#", "C++", "F#"],
//     favoriteEditor: "Visual Studio Code",
//     hobbies: ["Tennis", "Biking", "Archery"],
//     hometown: {
//       city: "Albany",
//       state: "NY",
//     },
//   },
//   {
//     username: "david",
//     email: "david@test.com",
//     yearsExperience: 12.5,
//     favoriteLanguages: ["JavaScript", "C#", "Swift"],
//     favoriteEditor: "VS Code",
//     hobbies: ["Volunteering", "Biking", "Coding"],
//     hometown: {
//       city: "Los Angeles",
//       state: "CA",
//     },
//   },
// ];

// const printEmails = function () {
//   const cycle = users.forEach(function (user) {
//     // console.log(user.email);
//   });
// };

// printEmails();

// const printHobbies = function () {
//   const hobbies = users.forEach(function (users) {
//     // console.log(users.hobbies[0]);
//   });
// };

// printHobbies();

// const findHometownByState = function (town) {
//   const user = users.map(function (user) {
//     if (town === user.hometown.state) {
//       return user;
//     }
//   });
//   return user[0];
// };
// findHometownByState("CA");

// let name = "chris";
// let dayOfBirth = 7;

// // prompt("What is your favorite color?");

// // console.log(prompt("What is your favorite color?"));

// // console.log('he said " stop right there" and then ran');
// // let thing;
// // console.log(thing);

// // let number = 55;
// // // we begin with an "if" statement followed by a condition in () and a block
// // // of code inside of {}
// // if (number === "55") {
// //   console.log("Yes!");
// // } else {
// //   console.log("No");
// // }

// // console.log(true || false);
// // let isLearning = true;
// // if (isLearning) {
// //   console.log("Keep it up!");
// // } else {
// //   console.log("Pretty sure you are learning....");
// // }
// let firstvariable;
// let secondvariable = "";
// let thirdvariable = 1;
// let secretMessage = "Shh!";

// if (firstvariable) {
//   console.log("first");
// } else if (firstvariable || secondvariable) {
//   console.log("second");
// } else if (firstvariable || thirdvariable) {
//   console.log("third");
// } else {
//   1 / 2;
//   console.log("fourth");
// }

// let rando = Math.random();

// if (rando > 0.5) {
//   console.log("Over 0.5");
// } else {
//   console.log("under 0.5");
// }

// // let test = ["checking", "this", "splice", "method", "chris", "picard"];

// // console.log(test.splice(0, 3, "this"));
// // console.log(test);

// let favoriteFoods = ["Pizza", "Hamburger", "Lobster"];
// // console.log(favoriteFoods[1]);
// favoriteFoods[2] = "Taco";
// console.log(favoriteFoods);
// favoriteFoods.unshift("Fries");
// console.log(favoriteFoods);

// let em = [];
// console.log(em.pop());

// let test = [2, 3, 4, 5]; //245
// test.splice(1, 3, 4, 5);
// console.log(test);

// let more = ["alpha", "gamma", "delta"];
// // ["alpha", "beta", "gamma", "delta"]
// more.splice(1, "beta", "beta");
// console.log(more);

// //EXCERSIES
// let num = [10, -10, -5, -3, 2, 1];
// // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// num.splice(1, num.length, 9, 8, 7, 6, 5, 4, 3, 2, 1);
// console.log(num);

// let arr = [];
// arr.push("chris");
// console.log(arr);
// arr.splice(1, "", "picard");
// console.log(arr);
// arr.unshift("green");
// console.log(arr);
// arr.shift("green");
// console.log(arr);

// let arr2 = [7, "Javascript"];
// arr2.indexOf(7);
// console.log(arr2.indexOf(7));

// let combinedArr = arr.concat(arr2);
// console.log(combinedArr);

// let arr3 = ["JavaScript", "Python", "Ruby", "Java"];
// let moreOf = ["Haskell", "Clojure"];
// let copy = arr3.slice(1, 3);
// console.log(copy);
// let this1 = arr3.concat(moreOf);
// console.log(this1);
// console.log(arr3);

// // for (let i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// // let i = 0;
// // while (i < 5) {
// //   console.log(i);
// //   i++;
// // }
// /////////////////////////////////////////////
// //ITERATORS PRACTICE     ///////////

// let people = ["Greg", "Mary", "Devon", "James"]; //use this array//

// for (pep of people) {
//   console.log(pep);
// }
// //////////
// // people.shift(1);
// // console.log(people);
// ///////////

// // const sliceIt = people.slice(0, 3);

// // console.log(sliceIt);
// people.unshift("Mat");
// console.log(people);

// people.push("Chris");
// console.log(people);

// for (pep of people) {
//   if (pep === "Mary") {
//     break;
//   }
//   console.log(pep);
// }

// let quiz = people.slice(1, 5);
// console.log(quiz);

// console.log(people);
// const check = people.indexOf("Mary");

// console.log(check);

// let people1 = ["Greg", "Mary", "Devon", "James"]; //use this array//
// people1.splice(2, 3, "Elizabeth", "Artie", "james");
// console.log(people1);

// let withBob = people.concat("Bob");
// console.log(withBob);
// //// A+ ///////
// // DONT WITH ITERATOR PRACTICE
// /////////////////////////////////////////////

// // let me = {
// //   firstName: "chris",
// //   lastName: "picard",
// //   occupation: "front-end web developer",
// // };
// // console.log(me.firstName);
// // console.log(me["firstName"]);
// //OBJECTS//
// let namesAndHobbies = {
//   elie: "JavaScript",
//   matt: "jogging",
//   janey: "table building",
//   tim: "sailing",
//   myName: "chris",
//   hobby: "basketball",
// };

// for (let muy in namesAndHobbies) {
//   console.log(`${namesAndHobbies[muy]} => ${muy}`);
// }

// let programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// };
// programming.languages.push("Go");
// console.log(programming.languages);

// this.difficulty = 7;
// console.log(programming.difficulty);

// delete programming.jokes;
// console.log(programming);

// programming.isFun = true;

// console.log(programming);

// for (lang of programming.languages) {
//   console.log(lang);
// }

// let keys = Object.keys(programming);

// for (key of keys) {
//   console.log(key);
// }

// let val = Object.values(programming);

// for (value of val) {
//   console.log(value);
// }
// ///////////////////// FUNCTIONS ///////////
// function myFunction() {}
// function myOtherFunction() {}
// function yetAnotherFunction() {}

// function myName() {
//   let name = "Chris picard";
//   return console.log(name);
// }
// myName();

// let favoriteFoods2 = ["pizza", "ice cream"];

// function randomFood() {
//   if (Math.random() > 0.5) {
//     return favoriteFoods2[0];
//   } else {
//     return favoriteFoods2[1];
//   }
// }
// randomFood();
// console.log(randomFood());
// /////////

// //chatgpt answr
// // Create an array called numbers containing the numbers 1 through 10
// // var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Define the function displayOddNumbers
// // function displayOddNumbers() {
// //   // Iterate over the numbers array
// //   for (var i = 0; i < numbers.length; i++) {
// //     // Check if the current number is odd
// //     if (numbers[i] % 2 !== 0) {
// //       // Log out the odd number
// //       console.log(numbers[i]);
// //     }
// //   }
// // }

// // Call the displayOddNumbers function
// // displayOddNumbers();
// ///////////////////////////////////////////
// ///FUNCTION PARAMETERS & SCOPE PRACTICE///

// function multiply(a, b) {
//   return a * b;
// }

// multiply(2, 2);
// console.log(multiply(2, 2));
// //////////////////////////
// function sayHi(name) {
//   if (name === "chris") {
//     console.log("hey boss");
//   } else {
//     console.log(`hey ${name}`);
//   }
// }
// sayHi("chris");
// sayHi("tim");
// ////////////////////////////////// ask nick from here down.
// //chat gpt
// function average(arr) {
//   if (arr.length === 0) {
//     return 0; // To handle an empty array, return 0 or throw an exception
//   }

//   const total = arr.reduce((acc, num) => acc + num, 0);
//   return total / arr.length;
// }
// const numbers = [1, 2, 3, 4, 5];
// const result = average(numbers);
// console.log(result); // Output: 3

// //not finished ^^^^^

// ////////////////////////////

// function createStudent(first, last) {
//   return {
//     firstName: first,
//     lastNAme: last,
//   };
// }
// createStudent("chris", "picard");
// console.log(createStudent("chris", "picard"));
// ////////////////////////////////
// let max = createStudent("Max", "Packer");
// let sam = createStudent("Sam", "Ying");
// let megan = createStudent("Megan", "Picard");
// console.log(max);
// // let students = ["tim", "matt", "elie"];

// // students.concat(max, sam, megan);

// // console.log(students.concat(max, sam, megan));
// /////////////////////////////////
// //ask nick// answwered it with chatgpt
// let students = [max, sam, megan];
// // console.log(students);
// function findStudentByFirstName(firstName) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].firstName.toLowerCase() === firstName.toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }
// // let students = ["tim", "matt", "elie"];

// console.log(findStudentByFirstName("megan"));
// console.log(findStudentByFirstName("max"));
// console.log(findStudentByFirstName("chris"));

// ///////////////////////////////////////
// function extractEveryThird(arr5) {
//   let result1 = [];
//   for (let i = 2; i < arr5.length; i += 3) {
//     result1.push(arr5[i]);
//   }
//   return result1;
// }
// var array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var extracted1 = extractEveryThird(array6);
// console.log(extracted1); // Output: [3, 6, 9]

// // extractEveryThird([1, 2, 3]);
// // console.log(extractEveryThird([1, 2, 3, 4, 5, 6]));
// // console.log(extractEveryThird([1, 2, 3]));
// ///////////////////////////////////////////

// // for (let i = 0; i < arr5.length; i++) {
// //   if (arr5[i] % 2 === 1) {
// //     console.log(arr5[i]);
// //   }
// // }

// function countEvenAndOdds(Thearray) {
//   let countNum = {
//     oddCount: 0,
//     evenCount: 0,
//   };
//   for (let i = 0; i < Thearray.length; i++) {
//     if (Thearray[i] % 2 === 0) {
//       countNum.evenCount++;
//     } else {
//       countNum.oddCount++;
//     }
//   }
//   return countNum;
// }
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var counts = countEvenAndOdds(array);
// console.log(counts); // Output: { oddCount: 5, evenCount: 5 }
// ///////////////////////////////////////////////
// let mylet = "Hello from global";
// function scopePractice() {
//   let mylet = "Hello from function scope";
// }
// scopePractice();
// console.log(mylet);
// let tricky = "Hello from global";
// function trickyScopePractice() {
//   tricky = "Hello from function scope";
// }
// console.log(tricky);
// //////////////////////////////
// // let capitals = [];
// function onlyCapitalLetters(stringer) {
//   let capitals = [];
//   for (i = 0; i < stringer.length; i++) {
//     if (stringer[i] === stringer[i].toUpperCase()) {
//       capitals.push(stringer[i]);
//     }
//   }
//   return capitals.join("");
// }
// onlyCapitalLetters("Amazing");
// console.log(onlyCapitalLetters("EVERYTHING"));
// console.log(onlyCapitalLetters("AmaZing"));
// /////////////////////////////////////////////////////
// function findStudentByFirstName(firstName) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].firstName.toLowerCase() === firstName.toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }
// // let students = ["tim", "matt", "elie"];

// console.log(findStudentByFirstName("megan"));
// console.log(findStudentByFirstName("max"));
// console.log(findStudentByFirstName("chris"));

// function displayOddNumbers() {
//   for (let num of numbers) {
//     if (num % 2 != 0) {
//       console.log(num);
//     }
//   }
// }

// (function displayFulName(firstName, lastName) {
//   return firstName + lastName;
// })("chris", "picard");
// //////////////////////EXCERSIES/////////////////////////////
// let differnce = function (a, b) {
//   return a - b;
// };
// differnce(2, 2);
// console.log(differnce(0, 2));
// ///////////////////////////
// let product = function (a, b) {
//   return a + b;
// };
// console.log(product(2, 2));
// ///////////////////////////
// //ask nick
// function getDayOfWeek(number) {
//   if (number < 1 || number > 7) {
//     return undefined;
//   }

//   switch (number) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//   }
// }

// ////////////////////////////////////////

// console.log(getDayOfWeek(1));
// //////////////////////////////
// // let list = [];
// // function lastOne(lastOne) {
// //   for (num1 of list) {
// //     if (num1 === list.length - 1) {
// //     }
// //     return list.concat(num1);
// //   }
// // }
// /////////////chat gpt///////////////
// function getLastValue(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }

//   return arr[arr.length - 1];
// }

// console.log(getLastValue([1, 2, 3, 4, 5, 6])); // Output: 3
// console.log(getLastValue(["apple", "banana", "cherry", "chris"])); // Output: 'cherry'
// console.log(getLastValue([])); // Output: undefined
// ////////////////////////////

// function numberCompare(a, b) {
//   if (a > b) {
//     return console.log(`${a} is greater than ${b} `);
//   } else if (b > a) {
//     return console.log(`${b} is greater than ${a} `);
//   } else if (a === b) {
//     return console.log("numbers are equal");
//   } else {
//     return undefined;
//   }
// }
// numberCompare(1, 2);
// numberCompare(1, 1);
// numberCompare(4, 3);
// //correct!
// /////////////////////////////
// let count = 0;
// function letsLook(word1, letter) {
//   for (let i = 0; i < word1.length; i++) {
//     if (word1[i] === letter) {
//       count++;
//     }
//   }
//   return count - 1;
// }
// letsLook("abc", "a");
// letsLook("abc", "f");
// console.log(letsLook("abcdaa", "a"));
// ////////////////////////////////////////////////////////
// //chatgpt
// function countLetters(str) {
//   let count = {};

//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];

//     if (count[letter]) {
//       count[letter]++;
//     } else {
//       count[letter] = 1;
//     }
//   }
//   return count;
// }

// // multipleLetterCount("hello");
// // multipleLetterCount("hello");
// // console.log(multipleLetterCount("hello"));
// let inputString = "hellossss";
// let letterCounts = countLetters(inputString);
// console.log(letterCounts); // Output: { h: 1, e: 1, l: 2, o: 1 }
// /////////////////////////////////////////
// //passssed
// function arrayManipulation(arr, comm, location, val) {
//   if (comm === "remove" && location === "end") {
//     return arr.pop(val);
//   } else if (comm === "remove" && location === "beginning") {
//     return arr.shift(val);
//   } else if (comm === "add" && location === "beginning") {
//     arr.unshift(val);
//     return arr;
//   } else if (comm === "add" && location === "end") {
//     arr.push(val);
//     return arr;
//   }
//   return val;
// }

// console.log(arrayManipulation([1, 2, 3], "remove", "end"));
// console.log(arrayManipulation([1, 2, 3], "remove", "beginning"));
// console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20));
// console.log(arrayManipulation([1, 2, 3], "add", "end", 30));
// //////////////////
// //chat gpt
// function isPalindrome(str) {
//   let modify = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let changed1 = modify.split("").reverse().join("");

//   return modify === changed1;
// }
// isPalindrome("testing");
// console.log(isPalindrome("testing"));
// console.log(isPalindrome("tacocat"));
// console.log(isPalindrome("testing"));
// console.log(isPalindrome("hannah"));
// /////////////////////////
// //tic tac toe

// // var ticTac = prompt("what is your move");

// // function ticTacToe() {
// //   if ((ticTac = "rock")) {
// //     console.log("rock beats you");
// //   }

// //   return ticTac;
// // }
// // ticTacToe();
// // var computerChoice = generateComputerChoice();
// // console.log(computerChoice);
// //////////////////chatgpt////////////////////////
// // function playGame() {
// //   // Get user's choice
// //   var userChoice = prompt(
// //     "Enter your choice: Rock, Paper, or Scissors"
// //   ).toLowerCase();

// //   // Generate computer's choice randomly
// //   var computerChoice = generateComputerChoice();

// //   // Check if user input is valid
// //   if (isValidChoice(userChoice)) {
// //     // Determine the winner
// //     var result = determineWinner(userChoice, computerChoice);

// //     // Display the results
// //     if (result === "tie") {
// //       alert("It's a tie!");
// //     } else if (result === "win") {
// //       alert("Congratulations! You win!");
// //     } else {
// //       alert("Sorry, you lose. Better luck next time!");
// //     }
// //   } else {
// //     alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
// //   }
// // }

// // function generateComputerChoice() {
// //   var choices = ["rock", "paper", "scissorss"];
// //   var randomIndex = Math.floor(Math.random() * choices.length);
// //   return choices[randomIndex];
// // }

// // function isValidChoice(choice) {
// //   return choice === "rock" || choice === "paper" || choice === "scissors";
// // }

// // function determineWinner(userChoice, computerChoice) {
// //   if (userChoice === computerChoice) {
// //     return "tie";
// //   } else if (
// //     (userChoice === "rock" && computerChoice === "scissors") ||
// //     (userChoice === "paper" && computerChoice === "rock") ||
// //     (userChoice === "scissors" && computerChoice === "paper")
// //   ) {
// //     return "win";
// //   } else {
// //     return "lose";
// //   }
// // }

// // Play the game
// // playGame();

// // console.log(generateComputerChoice());
// //////////////////////////////////////////////
// // let instructorData = {
// //   name: "Tim",
// //   favoriteHobbies: ["Sailing", "Hiking", "Coding"],
// // };
// // instructorData.favoriteHobbies.push("basketball");
// // console.log(instructorData.favoriteHobbies);

// let instructorData = {
//   name: "Elie",
//   additionalData: {
//     instructor: true,
//     favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
//     moreDetails: {
//       favoriteBasketballTeam: "New York Knicks",
//       numberOfSiblings: 3,
//       isYoungest: true,
//       hometown: {
//         city: "West Orange",
//         state: "NJ",
//       },
//       citiesLivedIn: ["Seattle", "Providence", "New York"],
//     },
//   },
// };
// function addDetail(key, val) {
//   instructorData.additionalData.moreDetails[key] = val;
//   //chatgpt

//   return instructorData.additionalData.moreDetails;
// }

// addDetail("favoriteFood", "Sushi");
// addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
// console.log(addDetail("favoriteFood", "Sushi"));
// console.log(instructorData);
// ///////////////////////////////
// function removeDetail(key) {
//   // instructorData.additionalData.moreDetails[key]
//   delete instructorData.additionalData.moreDetails[key];

//   return instructorData.additionalData.moreDetails;
// }
// removeDetail("citiesLivedIn");
// console.log(instructorData);
// ///////////

function rockPaperScissors() {
  let userMove = prompt("Choose rock,paper or scissors");
  let randomNum = Math.random() * 10;
  let computerMove = "";

  if (randomNum <= 3) {
    computerMove = "rock";
  } else if (randomNum <= 6) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  if (userMove === "rock" && computerMove === "paper") {
    console.log("computer wins, try again!");
  } else if (userMove === "rock" && computerMove === "scissors") {
    console.log("YOU WIN!!!");
  } else if (userMove === " rock" && computerMove === "rock") {
    console.log("its a draw");
  } else if (userMove === "paper" && computerMove === "rock") {
    console.log("YOU WIN !!!");
  } else if (userMove === "paper" && computerMove === "scissors") {
    console.log("computer wins, try again");
  } else if (userMove === "paper" && computerMove === "paper") {
    console.log("its a draw");
  } else if (userMove === "scissors" && computerMove === "paper") {
    console.log("you win");
  } else if (userMove === "scissors" && computerMove === "rock") {
    console.log("try again ");
  } else if (userMove === "scissors" && computerMove === "scissors") {
    console.log("its a draw");
  } else {
    console.log('please type "rock ,paper or scissors"');
  }
}

// rockPaperScissors();
///////////////////////////////////////////////////////////

// let nestedArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8],
//   [9, 10, 11, 12],
// ];

// for (let i = 0; i < nestedArr.length; i++) {
//   for (let j = 0; j < nestedArr[i].length; j++) {}
// }

// let nestedArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9, 10, 11, 12],
// ];
// function printEvens() {
//   let nestedArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9, 10, 11, 12],
//   ];
//   for (let i = 0; i < nestedArr.length; i++) {
//     for (let j = 0; j < nestedArr[i].length; j++) {
//       if (nestedArr[i][j] % 2 == 0) {
//         console.log(nestedArr[i][j]);
//       }
//     }
//   }

//   return nestedArr[i];
// }
// printEvens();

///////////////////////////

function sumTotal() {
  let nestedArr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  let sum = 0;

  for (let i = 0; i < nestedArr.length; i++) {
    for (let j = 0; j < nestedArr[i].length; j++) {
      sum += nestedArr[i][j];
    }
    console.log(sum);
  }
  return sum;
}
sumTotal();
//////////////////////////////

function rotate(arr, num) {
  for (let i = 0; i < num; i++) {
    let removed = arr.pop();
    arr.unshift(removed);
  }

  return arr;
}

console.log(rotate([1, 2, 3], 1));
/////////////////////////////////

function makeXOGrid(row, col) {
  let finalArr = [];
  for (let i = 0; i < row; i++) {
    let newRow = [];
    let currentVal = true;
    for (let j = 0; j < col; j++) {
      if (currentVal) {
        newRow.push("x");
      } else {
        newRow.push("o");
      }
      currentVal = !currentVal;
    }

    finalArr.push(newRow);
  }
  return finalArr;
}
////////////////////////////////

// function appendToString(str1, str2) {
//   return str1 + str2;
// }
// appendToString("Hello", " World!");
// console.log(appendToString("Hello", " World!"));
// ////////////////////////////////// correct
// function prependToString(str1, str2) {
//   return str2.concat(str1);
// }
// console.log(prependToString("awesome", "very"));
// //////////////////////// correct
// // function charAt(str, str2) {}
// // charAt("awesome", "e");
// // console.log(charAt("awesome", "e"));
// ///////////////////////
// function stringIncludes1(str, char) {
//   if (str.includes(char)) {
//     return "that letter is there";
//   } else {
//     return false;
//   }
// }

// stringIncludes1("cam", "a");
// console.log(stringIncludes1("cam", "c"));
// ////////////////
// function stringIndexOf(str, i) {
//   console.log(str.lastIndexOf(i));
// }

// console.log(stringIndexOf("can", "a"));
// let string = "can";
// string.lastIndexOf("");
// console.log(string.lastIndexOf("n"));
// ////////////////////
// function repeat(string, num) {
//   return string.repeat(num);
// }
// repeat("mat", 3);
// console.log(repeat("mat", 3));
// console.log(repeat("chris", 5));
////////////////////
function removeFromString(string, num, num2) {
  // string.splice(num, num);
  string.slice(num, num2);
}
console.log(removeFromString("Elie", 2, 2));

function appendToString(str1, str2) {
  console.log(str1 + str2);
}
console.log(appendToString("Hello", " World!"));
//
function prependToString(str1, str2) {
  console.log(str2 + str1);
}
prependToString("awesome", "very");
//
// function charAt(str, num) {
//   let newOne = [];
//   for (let i = 0; i < str.length; i++) {}
// }
// charAt();
function getIndex(input, i) {
  return input.substring(i, i + 1);
}

getIndex("great", 1);
console.log(getIndex("awesome", 2));
// console.log(charAt("awesome", 2));

// let string = "awesome";
// console.log(string[2]);

function stringIncludes50(str, letter) {
  // for (let i = 0; i < str.length; i++) {
  if (str.includes(letter)) {
    return true;
  }
}
stringIncludes("awesome", "e");
// console.log(stringIncludes50("awesome", "e"));

function stringIncludes(str, letter) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      return true;
    }
  }
  return false;
}
console.log(stringIncludes("can", "a")); ////
console.log(stringIncludes("awesome", "e"));
console.log(stringIncludes("awesome", "z"));

function maxIt(arr) {
  let maximumValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximumValue) {
      maximumValue = arr[i];
    }
  }
  return maximumValue;
}
console.log(maxIt([5, 1, 4, 7, 1, 2]));
///

// function min(arr) {
//   let minVal = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minVal) {
//       minVal = arr[i];
//     }
//   }
//   return minVal;
// }
// console.log(min([5, 1, 4, 7, 1, 2, 0]));
/////
//unfinsihed
function slice(arr, num1, num2) {
  num2 = arr.length;

  let slicedNums = [];

  if (num2 === undefined) {
    arr.slice(0, num2);
  }
  for (let i = num1; i < arr.length; i++) {
    slicedNums.push(arr[i]);
  }

  return console.log(slicedNums);
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice([1, 2, 3, 4, 5], 2, 4));
console.log(slice([1, 2, 3, 4, 5], 2));

/////////////////////
//GOT IT!!!!!!!
function countValues(arr, num) {
  let timesInArray = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      timesInArray++;
    }
  }
  return timesInArray;
}
console.log(countValues([4, 1, 4, 2, 3, 4, 4, 4, 4, 4], 4)); //7;
////////// ask help//////
// let newObject = [];
// function keys1(obj) {

//   // return console.log(Object.keys(obj));
// }
// console.log();
let obj = { a: 1, b: 2, c: 3 };

///////////
console.log(obj.values());

// function multiples(x, n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(x * i);
//   }
//   return result;
// }
// const x = 2;
// const n = 5;
// const result = multiples(x, n);
// console.log(result);
////
function pluck(objArr, nameOfKey, value) {
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i] === nameOfKey) {
      objArr.push({ nameOfKey: value });
    }
  }
  return value;
}
pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name");
console.log(
  pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name")
);
//////// need help //////
function collectOddsAndEvens(arr) {
  let collection = { oddNum, evenNum };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      collection[oddNum] = arr[i];
    } else {
      collection[evenNum] = arr[i];
    }
    arr.push(collection);
  }
  return console.log(collection);
}
console.log(collectOddsAndEvens[(1, 2, 3, 4, 5, 6, 7, 8)]);
console.log(collectOddsAndEvens);
///
