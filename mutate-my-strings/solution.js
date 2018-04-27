function mutateMyStrings (str1, str2){
  let arr1 =  str1.split('');
  let arr2 = str2.split('');
  let arr3 = [];
  for(i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
    arr1[i] = arr2[i];
    arr3.push(arr1.join(''));
    }
  }
  var concat = `${str1}\n${arr3.join('\n')}\n`;
  return concat;
}
