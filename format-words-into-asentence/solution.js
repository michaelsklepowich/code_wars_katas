function formatWords(words){

 if( words === null || words.length === 0) {
   return '';
 }

 let lastChar;
 let newWords = words.filter( word => word.length > 1 );

 if( newWords.length < 2 ){
   return newWords.join();
 }

 else {
   lastChar = newWords[newWords.length - 1];
   newWords.pop();
   return newWords.join(', ') + ' and ' + lastChar;
 }
}
