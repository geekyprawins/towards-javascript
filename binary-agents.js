function binaryAgent(str) {


  var binArr = str.split(' ');

  var uniString = [];

  for (var i = 0; i < binArr.length; i++) {

    uniString.push(String.fromCharCode(parseInt(binArr[i], 2)))


  }



  return uniString.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");