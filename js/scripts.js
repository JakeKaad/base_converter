var baseConverter = function(number, base){
  var numbers = number.split("").reverse();

  var value = 0
  var result = 0
  numbers = numbers.map(function(num){

    if( num === "1" ){
      var newNum = Math.pow(base, value);
      value += 1
      result += newNum
      return newNum
    } else {
      value += 1
      return 0;
    }
  });
  return result;
}
