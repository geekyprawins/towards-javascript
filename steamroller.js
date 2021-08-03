function steamrollArray(arr) {

  const ansArr = [];
  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {


      ansArr.push(...steamrollArray(arr[i]));
    }
    else {

      ansArr.push(arr[i]);
    }

  }


  return ansArr;
}

steamrollArray([1, [2], [3, [[4]]]]);