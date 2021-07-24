function findLongestWordLength(str) {
let maxL=0;
let words = str.split(' ');
for(let i=0; i<words.length;i ++){
  if(words[i].length>maxL){
    maxL = words[i].length;

  }
}
return maxL;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");