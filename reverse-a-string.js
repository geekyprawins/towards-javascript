function reverseString(str) {
  let arr = [...str];
  let newStr = '';

  for(let i = arr.length-1 ; i>=0 ; i--){
    newStr+=arr[i];
  }

  return newStr;
}
reverseString("hello");