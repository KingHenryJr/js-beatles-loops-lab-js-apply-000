function theBeatlesPlay(musicians, instruments){

var arr = [];

for (var i = 0; i < musicians.length; i++) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`);
}
return arr;
}

function johnLennonFacts(facts){
  var arr = [];
  var num = 0;
  while (num < facts.length) {
    
    arr.push(`${facts[num]}!!!`);
    num++;
  }
  
  return arr;
}

function iLoveTheBeatles(num){
  
  var arr = [];
  
  do { 
    arr.push("I love the Beatles!")
  } while (num < 15)
  
  return arr
}




