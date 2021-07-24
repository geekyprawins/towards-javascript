function titleCase(str) {
  let wordsLower = str.toLowerCase().split(' ');
  let wordsNeed = wordsLower.map(function (val) {
    return (val.replace(val.charAt(0), val.charAt(0).toUpperCase()));
  });
  return wordsNeed.join(' ');
}



titleCase("I'm a little tea pot");