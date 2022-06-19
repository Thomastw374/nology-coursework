function isNumberPositive(number) {
  if (number > 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

isNumberPositive(5);
isNumberPositive(-1);

function convertDaysToAge(days) {
  age = days / 365;

  console.log(age);
}

convertDaysToAge(3650);
convertDaysToAge(6570);

function getLastName(nameArray) {
  const lastNameIndex = nameArray.length - 1;
  console.log(nameArray[lastNameIndex]);
}

getLastName(["Charlie", "Rob", "Andy"]);

function getLargestNumber(numberArray) {
  let largest = 0;
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > largest) {
      largest = numberArray[i];
    }
  }
  console.log(largest);
}

getLargestNumber([2, 3, 7, -6, 3]);

function allNumberPositive(numberArray) {
  let isPositive = "True";
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < 0) {
      isPositive = "False";
    }
  }
  console.log(isPositive);
}

// I initially didn't add quotation marks to true and false and ran into an error due to this

allNumberPositive([2, 3, -7, 3, 3]);
