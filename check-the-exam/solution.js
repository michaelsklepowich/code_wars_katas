function checkExam(array1, array2) {
 let counter = 0;
 for (i =0; i < array1.length; i++) {
   if(array2[i] !== '') {
     if (array1[i] === array2[i]) {
     counter = counter + 4;
     } else {
       counter--;
     }
   }
 }
 if (counter < 0) {counter = 0;};
 return counter;
}
