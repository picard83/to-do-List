// const printFirstAndLast = ["awesome", "example", "of", "forEach"];

// printFirstAndLast.forEach(function (val) {
//   if (val === "of") {
//     val[1];
//   }

//   console.log(val[0], val[6]);
// });

const printFirstAndLast = function (arr) {
  arr.forEach((val) => {
    console.log(val[0], val[val.length - 1]);
  });
};
printFirstAndLast(["awesome", "example", "of", "forEach"]);

//ask how to add "of"///

// const names = ["billy", "willy", "eric", "megan"];

// names.forEach(function (name) {
//   console.log(`hi ${name.length}`);
// });

const valTimesIndex = [5, 10, 15];

// console.log(valTimesIndex);

const map1 = valTimesIndex.map(function (val, _, _) {
  return 2 * val;
});
console.log(map1);

const addKeyAndValue = function (arr, key, val) {
  const newArr = arr.map(function (item) {
    item[key] = val;
    return item;
  });
  return newArr;
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// const learn = movements.filter(function (mov) {
//   return mov > 80;
// });
// console.log(learn);
// //////////////////////////////////////////////////
// const letters = ["a", "b", "c", "c", "a", "b"];

// const more = letters.filter(function (letr) {});

// console.log(more);

const arr3 = ["alex", "adrian", "bobby", "bill", "jack", "jill"];

const lookUp = function (letr, number) {
  const looking = arr3.map(function (val, i, arr) {
    return arr3;
  });
  console.log(lookUp);
};

function filterLetters(letters, specificLetter) {
  const lowerCaseSpecificLetter = specificLetter.toLowerCase();
  let count = 0;

  for (let i = 0; i < letters.length; i++) {
    const currentLetter = letters[i].toLowerCase();
    if (currentLetter === lowerCaseSpecificLetter) {
      count++;
    }
  }

  return count;
}

filterLetters(["a", "a", "b", "c", "A"], "c");

//highorder function// callbacks

const checking = ["alex", "adrian", "bobby", "bill", "jack", "jill"];

function checkingLettera(word) {
  const check = checking.filter(function (words) {
    if (words[0] === "a") {
      return check;
    }
  });
}

checkingLettera(check);
console.log(checkingLettera("alex"));
