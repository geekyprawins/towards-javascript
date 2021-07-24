function confirmEnding(str, target) {
 if(str.slice(str.length -target.length)== target){
   return true;
 }
 return false;
}

confirmEnding("Bastian", "n");