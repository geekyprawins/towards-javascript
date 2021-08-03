function addTogether() {

  function checkNum(num) {

    return (typeof num === "number");
  }

  if (arguments.length === 2) {

    let first = arguments[0];
    let second = arguments[1];

    if (checkNum(first) && checkNum(second)) {

      return first + second;
    }
    else return undefined;



  }
  else if (arguments.length === 1) {
    let first = arguments[0];
    if (checkNum(first)) {
      // Return function that expect a second argument.
      function addSecond(second) {
        // Check if the new argument is a number
        if (checkNum(second)) {
          return first + second;
        } else {
          return undefined;
        }
      };
      return addSecond;
    } else {
      return undefined;


    }

  }
  else return undefined;
}
  addTogether(2, 3);