
/*
Topic：Counting Duplicates
Url：https://www.codewars.com/kata/counting-duplicates/javascript
*/

// my SOLUTION

function duplicateCount(text){
  //...
  let text_arr = text.split('')
  let all_add = {}
  let count = 0
  text_arr.forEach( word => {
    let upper_Word = word.toUpperCase()
    all_add[upper_Word] = all_add[upper_Word] ? all_add[upper_Word] : 1
    all_add[upper_Word] = all_add[upper_Word] + all_add[upper_Word]
    if( all_add[upper_Word] > 2){
      count++
      all_add[upper_Word] = -1
    }
  }) 
  return count
}

// other best SOLUTION

// 有做排序
function duplicateCount(text){ 
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}


function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}