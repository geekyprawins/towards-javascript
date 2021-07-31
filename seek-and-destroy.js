function destroyer(arr, ...valsToRemove) {

  return arr.filter(val => !valsToRemove.includes(val));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);