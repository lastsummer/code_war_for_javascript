
/*
Topic：Sum by Factors
Url：https://www.codewars.com/kata/54d496788776e49e6b00052f
*/

// my SOLUTION

// 很像之前求質數的變形
function sumOfDivided(lst) {
  const isPrime = function(num){
    for (var i = 2; i <= (Math.sqrt(num)); i++) if (num % i == 0) return false;
    return num >= 2; 
  }
  let primeList = {}
  lst.forEach(ele=>{
    let numPrime = true
    for(let i=2; i<=(Math.sqrt(Math.abs(ele))); i++){
      if(ele%i===0 ){
        numPrime = false
        if(isPrime(i)) primeList[i] = primeList[i] ? primeList[i]+ele : ele
        if(i!= Math.abs(ele/i) && isPrime(Math.abs(ele/i))) primeList[Math.abs(ele/i)] = primeList[Math.abs(ele/i)] ? primeList[Math.abs(ele/i)]+ele : ele
      }
    }
    if(numPrime && Math.abs(ele)>=2){
      primeList[Math.abs(ele)] = primeList[Math.abs(ele)] ? primeList[Math.abs(ele)]+ele : ele
    } 
  })
  return Object.keys(primeList).map(ele=>{
    return [parseInt(ele), primeList[ele]]
  })
}


// other best SOLUTION

// 先取出最大值，之後做2~最大值for迴圈，每個迴圈去取得是否為lst的因數。最後的foreach迴圈應該是跳過不為prime的數字(最後這招好聰明)
function sumOfDivided(lst) {
  if(lst.length == 0) { return []; }
  var m = Math.max.apply(null, lst.map(Math.abs)),
      primes = [],
      marked = Array(m+1);

  for(var i = 2; i <= m; ++i) {
      if(marked[i]) continue;

      var sum = 0, isMul = false;
      lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });
      if(isMul) primes.push([i, sum]);

      for(var j = 2*i; j <= m; j += i) {
          marked[j] = true;
      }
  }

  return primes;
}
