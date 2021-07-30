const squareList = arr => {
  // Only change code below this line

  return arr.filter(val =>val>0 && val%parseInt(val)===0).map(val => Math.pow(val,2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
