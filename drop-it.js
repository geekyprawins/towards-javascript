function dropElements(arr, func) {
  var found = false;
  var i;
  for (i = 0; i < arr.length; i++) {

    if (func(arr[i]) === true) {
      found = true;
      break;

    }


  }
  return arr.slice(i, arr.length);;
}

dropElements([1, 2, 3], function (n) { return n < 3; });