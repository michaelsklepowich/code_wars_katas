function insertDash(num) {
  let numStringArray = num.toString().split('');
  let newNumString = '';
  //was last number odd
  let WLNO;
  for (var i in numStringArray)
  {
      if ((parseInt(numStringArray[i]) % 2 !== 0) && WLNO === true) {
       newNumString += '-';
     }
     if (parseInt(numStringArray[i]) % 2 !== 0) {
       WLNO = true;
     }
     else {
       WLNO = false;
     }
     newNumString += numStringArray[i];
  }
  return newNumString;
}
