function countOnline(usersObj) {
  // Only change code below this line
  let onlineCount = 0;
for(let user in usersObj){
 if(usersObj[user]['online'] == true){
   onlineCount++;
 }
 
  } return onlineCount;
   // Only change code above this line
}