module.exports = {
 

words: function (string) {
    var pattern = /\w+/g,s
        matchedWords = string.match( pattern );
    var counts = matchedWords.reduce(function ( count, word ) {
        if ( count.hasOwnProperty( word ) ) {
            count[ word ] = count[ word ] + 1;
        } else {
            count[ word ] = 1;
        }
        return count;

    }, {} );
},


findMinMax: function(array){
 var min = Math.min.apply(null, array);
  var max = Math.max.apply(null, array);
if (min === max){ 
  return [min];
}
return [min, max ] ;
}

}