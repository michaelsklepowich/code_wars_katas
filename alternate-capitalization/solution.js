function capitalize(s){
  var array = s.split('');
  var newArray = [];
  var newArray2 = [];
  for (i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      var oddPush = array[i].toUpperCase();
      newArray.push(oddPush);
    } else {
      var evenPush = array[i].toLowerCase();
      newArray.push(evenPush);
    }
  }
  for (i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      var oddPush2 = array[i].toUpperCase();
      newArray2.push(oddPush2);
    } else {
      var evenPush2 = array[i].toLowerCase();
      newArray2.push(evenPush2);
    }
  }
  var joining = newArray.join("");
  var joining2 = newArray2.join("");
  return [joining2, joining];
}
