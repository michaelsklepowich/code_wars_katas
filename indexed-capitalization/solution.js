function capitalize(s,arr){
  let foo = s.split('');
  for (i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (foo[num]) {foo[num] = foo[num].toUpperCase();}
    }
    let concat = foo.join('');
  return concat;
};
