
/*
Topic：Last digit of a large number
Url：https://www.codewars.com/kata/5511b2f550906349a70004e1
*/

// my SOLUTION
var lastDigit = function(str1, str2){  
  if(str2 === '0') return 1
  const digit = str1.substr(-1)
  let cycleArr = [null, digit]
  let digitCal = digit
  while(cycleArr.length===2 || digitCal!==digit){
  	digitCal = (digitCal * digit).toString().substr(-1)
    cycleArr.push(digitCal)
  }
  cycleArr.pop()
  cycleArr[0] = cycleArr.pop()
  return parseInt(cycleArr[parseInt(str2.substr(-2))%cycleArr.length]);
}

// other best SOLUTION
// 這個也太強了
var lastDigit = function(str1, str2){  
  return +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10
}

var lastDigit = function(str1, str2){
  return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
}