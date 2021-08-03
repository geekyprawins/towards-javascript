function truthCheck(collection, pre) {

  var isTruthy = true;
  for (var i = 0; i < collection.length; i++) {

    if (!Boolean(collection[i][pre])) {

      isTruthy = false;
    }

  }
  return isTruthy;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");