function sumAll(arr) {
  var sum = 0;

  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);