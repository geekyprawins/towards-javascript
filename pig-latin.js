function translatePigLatin(str) {

  var regex = /^[^aeiou]+/;
  var myConsonants = str.match(regex);
  return myConsonants !== null ? str.replace(myConsonants, '').concat(myConsonants).concat('ay') : str.concat('way');

}

translatePigLatin("consonant");