
/*
Topic：Weight for weight
Url：https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript
*/

// my SOLUTION

function orderWeight(strng) {
  // your code
  return strng.split(' ').map((val) => {
    try{
      return { 'value': val.split('').reduce((a,b)=>parseInt(a)+parseInt(b)), 'key': val }
    }catch(e){
      return { 'value': 0, 'key': val }
    }
    
  }).sort((a, b) => {
    if(parseInt(a.value) === parseInt(b.value)){
      let tmpA = a.key.split('')
      let tmpB = b.key.split('')
      let returnValue = 0
      tmpA.forEach(function(element,index) {
        if(element !== tmpB[index] && returnValue===0){
          if(element<tmpB[index]) {
            returnValue = -1
          }else{
            returnValue = 1
          }
        }
      })
      if(returnValue===0){
        returnValue = tmpA.length > tmpB.length ? 1 : -1
      }
      return returnValue
    }else{
      return a.value - b.value
    }
    
  }).map((fin) => {
    return fin.key
  }).join(' ')
}

// other best SOLUTION

// 使用 localeCompare 參數 其他想法很類似  reduced可以用補0的方式
function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {  
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key 
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}

// 想法類似 可是更簡短 且不用另外定義 {key: key, num:num}
function orderWeight(strng) {
  const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
   function comp(a,b){
     let sumA = sum(a);
     let sumB = sum(b);
     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    };
  return strng.split(' ').sort(comp).join(' ');
 }