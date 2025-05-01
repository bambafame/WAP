"use strict";

//Question a
const computeSumOfSquares = (...numbers) => {
  return numbers.map((num) => Math.pow(num, 2)).reduce((acc, num) => acc + num);
};

//Question b
const printOddNumbersOnly = (...numbers) => {
  numbers.filter((num) => num % 2 !== 0).forEach((num) => console.log(num));
};

//Question c
const printFibo = (n, a, b) => {
  if (n <= 0) {
    console.log("");
    return;
  }
  const result = Array(n).fill(0);

  result.forEach((_, i) => {
    if (i === 0) {
      result[i] = a;
    } else if (i === 1) {
      result[i] = b;
    } else {
      result[i] = result[i - 1] + result[i - 2];
    }
  });
  console.log(result.join(", "));
};
