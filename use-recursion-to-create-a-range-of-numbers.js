function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum == 0) {
    return [startNum];
  }
  else {
    var rangeArr = rangeOfNumbers(startNum, endNum - 1);
    rangeArr.push(endNum);

    return rangeArr;
  }
};