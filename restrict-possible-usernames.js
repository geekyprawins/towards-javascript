let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
// or /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i