"use strict";

// let obj = { a: 1, b: 2, c: 3 };
// console.log(obj.values());

function pluck(arr, key) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][key]);
    console.log(newArr.push(arr[i][key]));
  }
  return newArr;
}
console.log(
  pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name")
);
///////// finished pluck// with nicks help ////

function multiples(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}
const x = 2;
const n = 5;
const result = multiples(x, n);
console.log(result); ////////chat gpt
////////////////////////////////////

function values(arr, key) {
  let newArr1 = [];
  for (let i = 0; i < arr.length; i++) {
    newArr1.push(arr[i][key]);
    // console.log(newArr1.push(arr[i][key]));
  }
  return newArr1;
}
console.log(
  values([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name")
);
///////////////////////\\
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
////////////////
// function findTheDuplicate(arr) {
//   let upperCaseCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let char = arr[i];
//     let char2 = char.toLowerCase();
//     if (char != char2) {
//       upperCaseCount++;
//     }
//     // arr[i].toLowerCase();
//     //   if (lower === arr[i].upperCase()) {
//     //     upperCaseCount++;
//     //   }
//     // }
//   }
//   return upperCaseCount;
// }
// findTheDuplicate([1, 2, 1, 4, 3, 12]);
// console.log(findTheDuplicate([3, 3, 2, 1, 4, 3, 12]));

function totalCaps(arr) {
  let capitalCount = 0;
  for (let j = 0; j < arr.length; j++) {
    let str = arr[j];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let char2 = char.toLowerCase();
      if (char != char2) {
        capitalCount++;
      }
    }
  }
  return capitalCount;
}
// totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]);
console.log(totalCaps(["Elie", "Matt", "Tim"]));
console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]));
console.log(totalCaps(["hello", "world"]));
/////////////////////////////////////////////////////////////

function separate(arr) {
  let cat = 0;
  let water = 0;
  let dog = 0;
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "cat") {
      cat++;
    } else if (arr[i] === "water") {
      water++;
    } else if (arr[i] === "dog") {
      dog++;
    }
  }

  for (let i = 0; i < cat; i++) {
    resultArray.push("cat");
  }

  for (let i = 0; i < water; i++) {
    resultArray.push("water");
  }
  for (let i = 0; i < dog; i++) {
    resultArray.push("dog");
  }
  // let resultArray = [];
  console.log(resultArray);
  return resultArray;
}
separate(["dog", "dog", "cat", "water"]);
/////////////////////////

function isAlt(str) {
  for (let i = 0; i < str.length; i++) {
    let j = i + 1;
    let isIAVowel;
    let isJVowel;
    let answer;
    if (str[i] === "a" || "e" || "i" || "o" || "u") {
      isIAVowel = true;
    } else {
      isIAVowel = false;
    }
    if (str[j] === "a" || "e" || "i" || "o" || "u") {
      isJVowel = true;
    } else {
      isJVowel = false;
    }
    if (isIAVowel === isJVowel) {
      answer = false;
    }
    console.log(answer);
  }
}
isAlt("amazon");
// try {
//   person;
// } catch (err) {
//   console.log(person);
// } finally {
//   // console.log(person);
// }
// person;
// try {
//   // Attempt to use the 'person' variable.
//   console.log(person);
// } catch (err) {
//   // Handle the error if it occurs.
//   console.error("An error occurred:", err);
// }

// function callMe(n) {
//   try {
//     let y = n.toUpperCase();
//     console.log("n is string", y);
//   } catch (error) {
//     console.log("Wrong Input");
//   }

//   console.log(n);
//   const x = n - 1;
//   if (x > 0) {
//     callMe(x);
//   }
// }

// let a = 10;
// let b = 20;
// try {
//   let c = a * b;
//   console.log(c);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Finally !!!");
// }
// let x = 7;
// console.log(x);
// try {
//   let age = prompt("Enter your age");

//   if (age == "") throw " you didn't enter anthing!";
//   if (isNaN(age)) throw age + " you didnt enter in a number";
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("thanks for visiting");
// }

// console.log(JSON.parse(json));
// console.log(JSON);

// const makeErr = () => {
//   let i = 1;
//   while (i <= 5) {
//     try {
//       if (i % 2 !== 0) {
//         throw new Error("OddNumber ");
//       }
//       console.log("Even number");
//     } catch (err) {
//       console.error(err.stack);
//     } finally {
//       console.log(".... finally");
//       i++;
//     }
//   }
// };
// makeErr();
//////////

// function customErr(message) {
//   this.message = message;
//   this.name = "customErr";
//   this.stack = `${this.name}: ${this.message}`;
// }

// function collectOddsAndEvens(arr) {

//   let odds = 0;
//   let evens = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evens++;
//     } else {
//       odds++;
//     }
//   }
//   return { odd: odds, even: evens };
// }
// // console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// // collectOddsAndEvens([2, 2, 2, 2, 2]);
// // console.log(collectOddsAndEvens([2, 2, 2, 2, 2]));
// //GOT IT FIRST TRY//
// /////////////////////////////////////////////////////\

// let obj = {
//   a: [1, 10, 3],
//   b: [4, 1, 7],
//   c: [7, 7, 7],
//   d: [10, 7, 12],
// };
// // let numberCount = 0;
// function countIfHasValue(obj, num) {
//   // console.log(obj);
//   let numberCount = 0;
//   let all = [];
//   let values = Object.values(obj);
//   // console.log(values);
//   for (let i = 0; i < values.length; i++) {
//     // console.log(values[i]);
//     all.push(values[i]);
//     // console.log(all[4]);

//     // for (let j = 0; j < i.length; j++) {}
//   }
//   // return console.log(numberCount);
// }

// countIfHasValue(obj, 1);
// // countIfHasValue(obj, 7);

// // console.log(countIfHasValue(obj, 10));
// /////////////////////////////////////////////////nick helped
// function calculateMonthlyOrders(arr) {
//   let totalCount = 0;
//   for (let item of arr) {
//     for (let key in item) {
//       totalCount += item[key];
//     }
//   }
//   return totalCount;
// }
// let orders = [
//   {
//     February: 1,
//     March: 2,
//     April: 2,
//   },
//   {
//     April: 1,
//     May: 2,
//     June: 2,
//   },
// ];
// calculateMonthlyOrders(orders);
// ///////////////////////////////////////nick helped
// function countValidNumsInString(str) {
//   let counter = 0;
//   for (let char of str) {
//     if (!isNaN(char)) {
//       counter++;
//     }
//   }
//   return counter;
// }
// ////////////////////////////////////nick helped
// function divideObject(obj) {
//   let totalNum = 0;
//   let totalStr = 0;
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       totalStr += obj[key].length;
//     } else {
//       totalNum += obj[key];
//     }
//   }
//   return [[totalNum], [totalStr]];
// }
// divideObject({
//   first: "hi",
//   second: "hello",
//   third: "hey",
//   fourth: 2,
//   fifth: "fun",
//   sixth: 10,
// });
// /////////////////////////////////////////nick helped (above question ^^)

// function findFirstAndLastIndex(arr, num) {
//   let firstAndLast = [];
//   //
//   let firstIndex = arr.indexOf(num);
//   firstAndLast.push(firstIndex);
//   //
//   let lastIndex = arr.lastIndexOf(num);
//   firstAndLast.push(lastIndex);

//   console.log(firstAndLast);
// }
// // findFirstAndLastIndex([1, 2, 3, 2, 3, 5], 3);
// ////////////////////////////////////////////////
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// function inMatrix(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     let newArr = arr[i];
//     for (let j = 0; j < newArr.length; j++) {
//       if (num === newArr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// // console.log(inMatrix(matrix, 4));
// ///////////////////////
// /////////// got it ^^ ////////////////////////////////////
// ///////////////////
// let todos = [
//   {
//     task: "Eat",
//     priority: 18,
//   },
//   {
//     task: "Sleep",
//     priority: 22,
//   },
//   {
//     task: "Solve problems",
//     priority: 17,
//   },
// ];

// function findHighestPriorityTodo(arr) {
//   let taskAndPriority = ["", 0];
//   let vals = Object.values(arr);

//   for (let i = 0; i < vals.length; i++) {
//     if (taskAndPriority[i] < vals[i].priority) {
//       //question about if statement condition
//       taskAndPriority = [vals[i].task, vals[i].priority];
//     }
//   }
//   // console.log(taskAtHand);
//   // console.log(highestPri);

//   // console.log(taskAndPriority);
// }

// findHighestPriorityTodo(todos);

// //crate a function with 'arr' in the parameters

// //loop through the array , getting the key and value of the multiple objects

// //if the value has the largest number in 'priority' , return a array with the task & number
// //////////////////////////////////////////////////// still working on abov problem  /

// /////////////////////////////////////////////////////////
// //
// let moves = [
//   ["a", "b", "c"],
//   ["d", "a", "f"],
//   ["g", "h", "h"],
//   ["l", "m", "n"],
// ];

// function findFirstMove(arr, str) {
//   for (let i = 0; i < arr.length; i++) {
//     let first = arr[i];
//     console.log(first);
//     for (let j = 0; j < first.length; j++) {
//       if (first[j] === str) {
// //         return [i, j];
// //       }
// //     }
// //   }
// //   return -1;
// // }
// // // console.log(findFirstMove(moves, "a"));
// // ///////////////////////////////////////////////////
// // function replaceAfter(arr, index) {
// //   arr.splice(index, 2, "hello", "world");
// //   return arr;
// // }
// // replaceAfter(["1", "2", "a", "b", "3", "4"], 2);
// // //////////////////////////////////////////////

// // function reverseValues(arr) {
// //   let newArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 == 0) {
// //       i = i + 2;
// //     } else {
// //       newArr.unshift(arr[i]);
// //     }
// //   }
// //   return newArr;
// // }

// // reverseValues([1, 1, 3, 3, 2]);
// // /////////////////////////
// // function robotInstructions(arr) {
// //   let countU = 0;
// //   let countD = 0;
// //   let countL = 0;
// //   let countR = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === "U") {
// //       countU++;
// //     } else if (arr[i] === "D") {
// //       countD++;
// //     } else if (arr[i] === "L") {
// //       countL++;
// //     } else if (arr[i] === "R") {
// //       countR++;
// //     }
// //   }
// //   return { U: countU, D: countD, L: countL, R: countR };
// // }
// // console.log(robotInstructions(["U", "D", "L", "R"]));
// // /////////////////////////////////////////////////////////

// // function seperateLanguages(arr) {
// //   let pythonCount = 0;
// //   let javaCount = 0;
// //   let other = [];
// //   for (str of arr) {
// //     if (str === "python") {
// //       pythonCount++;
// //     } else if (str === "javascript") {
// //       javaCount++;
// //     } else {
// //       other.push(str);
// //     }
// //   }
// //   return {
// //     python: pythonCount,
// //     javascript: javaCount,
// //     otherLang: other,
// //   };
// // }

// // seperateLanguages(["python", "python", "spanish", "javascript"]);
// // ///////////////////////////////////

// // const measureKelvin = function () {
// //   const measurement = {
// //     type: "temp",
// //     unit: "celsius",
// //     value: prompt("Degrees celsius"),
// //   };

// //   console.log(measurement.value);
// //   // console.warn(measurement.value);
// //   // console.error(measurement.value);

// //   const kelvin = measurement.value + 273;
// //   return kelvin;
// // };
// // console.log(measureKelvin());

// function greeting(a) {
//   try {
//     return " hi , welcome" + a.toUpperCase();
//   } catch (e) {
//     console.log("a error occured");
//     console.log(e.message);
//   } finally {
//   }
// }
// greeting(4);
// // console.log(return a * b * c);
// // for (let i = 0; i < 5; i++) {

// function each() {
//   // put your code inside here!
// }
// each([1, 2, 3, 4], function (val) {
//   console.log(val);
// });

// // function add(a, b) {
// //   return a + b;
// // }

// // function more(add) {
// //   console.log(add);
// // }
// // more();

//udemy course videos//
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// //higher order function
// const transformer = function (str, fn) {
//   console.log(`Orginal string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("Javascript is the best!", upperFirstWord);
// transformer("Javascript is the best!", oneWord);

// // js uses calllbacks all the time
// const high5 = function () {
//   console.log("hiiiiii");
// };

// document.body.addEventListener("click", high5);

// ["jonas", "martha", "adam"].forEach(high5);
// /////

// const greet = (greeting) => {
//   return function (name) {
//     console.log(`${greeting} ${name} `);
//   };
// };

// const greeterHey = greet("hey");
// greeterHey("jonas");
// greeterHey("steven");

// greet("hello")("jonas");
//////////////////////////////////////////////////////

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
////////////////////////
let map = function (arr, cb) {
  const newArr = [];
  for (let num of arr) {
    newArr.push(cb(num));
  }
  return newArr;
};

function cool(val) {
  return val * 10;
}

map([1, 2, 3, 4], cool);
//////////////////////////
let reject = function (arr, cb) {
  const newArr = [];
  for (let num of arr) {
    if (cb(num) == false) {
      newArr.push(num);
    }
  }
  return newArr;
};

reject([1, 2, 3, 4], function (val) {
  return val > 2;
});
////////////////////////////s

// //chat GPT answer ////
// function countdown(num) {
//   let timer = setInterval(function () {
//     if (num > 0) {
//       console.log(num);
//       num--;
//     } else {
//       clearInterval(timer);
//       console.log("DONE!");
//     }
//   }, 1000);
// }

// Example usage:
// countdown(4);
// /////////

// let counter = 0;

// let countInterval = setInterval(count, 3000);

// function count() {
//   console.log(counter++);
//   if (counter > 5) {
//     clearInterval(countInterval);
//   }
// }

// function hi() {
//   console.log("hi");
// }
// setInterval(hi, 1000);

// console.log(Math.random());

function randomGame() {
  let counter = 0;

  let timer = setInterval(() => {
    let num = Math.random();
    if (num < 0.75) {
      counter++;
    } else clearInterval(timer);
    return console.log(counter);
  }, 500);
}

// randomGame();
////////////////
// const newButton = document.createElement("button");
// newButton.textContent = "Click me!";
// document.body.appendChild(newButton);

// setInterval(() => {
//   console.log("Hello, World!");
// }, 2000);

// let country = new Object();
// country.name = "italy";
// country.pie = "kiss";

// console.log(country);

function first() {
  console.log("first one");
}

function second() {
  console.log("second one");
}

// let timer1 = setInterval(() => {
//   second();
// }, 2000);

function countdown(num) {
  let intern = setInterval(function () {
    num--;

    if (num === 0) {
      console.log("DONE!");
      clearInterval(intern);
    } else {
      console.log(num);
    }
  }, 1000);
}

// countdown(6);
///////////////////

function find(arr, callback) {
  for (let i in arr) {
    if (callback(arr[i])) {
      return i;
    }
  }
}
/////////

function findIndex(arr, callback) {
  for (let i in arr) {
    if (callback(arr[i])) {
      return i;
    }
  }
}
////////////

function specialMultiply(p1, p2) {
  if (p2 === undefined) {
    return function (c) {
      return p1 * c;
    };
  } else {
    return p1 * p2;
  }
}
///// //////////
