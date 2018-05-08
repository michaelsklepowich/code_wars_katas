function cubeOdd(arr) {
  let testVar = arr.map(x => x*x*x);
  let blankArr = [];
  let sum = 0;
  for(i=0; i< testVar.length; i++) {
    if (testVar[i] % 2 !==0) {
      blankArr.push(testVar[i]);
    }
  };
  for(i=0; i< blankArr.length; i++){
    sum += blankArr[i];
  }
  if (sum !== 0) {
    if (!sum ) {return undefined};
  }
  return sum;
}
