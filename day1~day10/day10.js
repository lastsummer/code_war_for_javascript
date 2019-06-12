/*
Topic：Remove Zeros
Url：https://www.codewars.com/kata/52aae14aa7fd03d57400058f
*/

// my SOLUTION
// 不能用filter
function removeZeros(array) {
  let a = [], b = []
  array.forEach( value => {
    if(value!==0 && value!=="0"){
      a = [...a, value]
    }else{
      b = [...b, value]
    }
  })
  return [...a,...b];
}


// other best SOLUTION
// 這題比較簡單，所以沒有什麼特別的