function largestOfFour(arr) {
  let largeArr = [];
  

  for (let i = 0; i < 4; i++) {
    let large = arr[i][0];
    for (let j = 0; j < 4; j++) {
      if (arr[i][j] > large) {
        large = arr[i][j];
      }

    }
    largeArr.push(large);
  }
  return largeArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);