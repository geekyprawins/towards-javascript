function frankenSplice(arr1, arr2, n) {
let newArr = arr2.slice(0,n);
newArr.push(...arr1);
newArr.push(...(arr2.slice(n, arr2.length)) );
console.log(newArr);


  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);