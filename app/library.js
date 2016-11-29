module.exports = {
 

wordCount: function(string){
  var strSplit =string.split(" ");
 var empty = ("");
  if (string ===empty){return 0;}
     return strSplit.length;
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