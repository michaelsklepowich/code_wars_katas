function high(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let strArray = string.split(" ");
  let eachWordArray = [];
  let scoreArray = [];
  for (i =0; i < strArray.length; i++) {
    let sum =0;
    let diffArray = strArray[i].split('');
    for (j=0; j < diffArray.length; j++) {
      sum += alphabet.indexOf(diffArray[j]);
      if (j === diffArray.length -1) {
      scoreArray.push(sum +1);
      }
    }
  }
  let max = scoreArray[0];
  let maxIndex = 0;
  for (var i = 1; i < scoreArray.length; i++) {
      if (scoreArray[i] > max) {
          maxIndex = i;
          max = scoreArray[i];
      }
  }
  return strArray[maxIndex];
}
