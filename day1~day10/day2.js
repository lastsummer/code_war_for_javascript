
/*
Topic：Jaden Casing Strings
Url：https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript
Kyu：7
*/

// my SOLUTION

String.prototype.toJadenCase = function () {
  return this.split(' ').map(function(val){
    return val.charAt(0).toUpperCase()+val.substring(1)
  }).join(' ')
  
};

// other best SOLUTION

// 跟我的差不多 只是我用substring他用slice
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

// 又是regex
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};