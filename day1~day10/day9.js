
/*
Topic：The observed PIN
Url：https://www.codewars.com/kata/5263c6999e0f40dee200059d
*/

// my SOLUTION
function getPINs(observed) {
  const numMap = {
   0: ["8","0"],
   1: ["1","2","4"],
   2: ["1","2","3","5"],
   3: ["2","3","6"],
   4: ["1","4","5","7"],
   5: ["2","4","5","6","8"],
   6: ["3","5","6","9"],
   7: ["4","7","8"],
   8: ["5","7","8","9","0"],
   9: ["6","8","9"]
  }
  let returnValue = []
  observed.split('').forEach(num => {
    let tmpCal = []
    numMap[num].forEach(com => {
    	if(returnValue.length === 0){
      	tmpCal.push(com)
      }else{
      	returnValue.forEach( reValue => {
          if(tmpCal.findIndex(ele => ele === (reValue+""+com))===-1) tmpCal.push(reValue+""+com)
      	})
      }
    })
    returnValue = tmpCal
  })
  return returnValue
}

// other best SOLUTION
function getPINs(observed) {
  var adjacent = [
    /* 0 */ [0, 8],
    /* 1 */ [1, 2, 4],
    /* 2 */ [1, 2, 3, 5],
    /* 3 */ [2, 3, 6],
    /* 4 */ [1, 4, 5, 7],
    /* 5 */ [2, 4, 5, 6, 8],
    /* 6 */ [3, 5, 6, 9],
    /* 7 */ [4, 7, 8],
    /* 8 */ [5, 7, 8, 9, 0],
    /* 9 */ [6, 8, 9]
  ];
  
  return observed
    .split('')
    .map(function(d) { return adjacent[d|0]; })
    .reduce(function(pa, da) {
      return da.reduce(function(pv, d) {
        return pv.concat(pa.map(function(p) {
          return '' + p + d;
        }));
      }, []);
    }, ['']);
}