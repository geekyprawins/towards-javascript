function palindrome(str) {

  var strCheck = str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');

  return str.toLowerCase().replace(/[\W_]/g, '') === strCheck;
}


palindrome("eye");