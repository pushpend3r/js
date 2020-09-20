const arrayOne = [1, 3, 4, 5];
const arrayTwo = [2, 4, 6, 8];

let indexOfArrayOne = 0,
  indexOfArrayTwo = 0;

let finalArray = [];

while (
  indexOfArrayOne !== arrayOne.length &&
  indexOfArrayTwo !== arrayTwo.length
) {
  if (arrayOne[indexOfArrayOne] > arrayTwo[indexOfArrayTwo]) {
    finalArray.push(arrayTwo[indexOfArrayTwo++]);
  } else {
    finalArray.push(arrayOne[indexOfArrayOne++]);
  }
}

if (indexOfArrayOne === arrayOne.length) {
  while (indexOfArrayTwo !== arrayTwo.length) {
    finalArray.push(arrayTwo[indexOfArrayTwo++]);
  }
} else {
  while (indexOfArrayOne !== arrayOne.length) {
    finalArray.push(arrayOne[indexOfArrayOne++]);
  }
}

console.table(finalArray);
