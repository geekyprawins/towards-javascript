function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
      
    }
  }

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));