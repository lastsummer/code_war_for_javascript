
/*
Topic：Counting Duplicates
Url：https://www.codewars.com/kata/555eded1ad94b00403000071/javascript
*/

// my SOLUTION

function countSum(n){
  if(n!=0){
    return (1 / (1+(n-1)*3)) + countSum(n-1)
  }else{
    return 0
  }
}
function SeriesSum(n){
 return countSum(n).toFixed(2).toString()
}


// other best SOLUTION

// for迴圈可以帶兩個參數
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  return s.toFixed(2)
}

// 我一開始的解法，可是因為聽說 遞迴(Recursive)比較屌，所以又改成遞迴的解法
function SeriesSum(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}

// 這個遞迴(Recursive)更短
function SeriesSum(n, s = 0) {
  return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}