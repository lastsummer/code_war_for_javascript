
/*
Topic：Largest Room Area
Url：https://www.codewars.com/kata/58feb9c16dcb746414000099/javascript
*/

// my SOLUTION

function getlength(rooms, path, x, y, len = 0){
  
  // 左
  let leftPath = 0
  if( (y-1 >= 0) && (rooms[x][y-1] === 0 && !path[x][y-1]) ){
    path[x][y-1] = true
    leftPath = getlength(rooms, path, x, y-1 , ++leftPath)
  }
  // 右
  let rightPath = 0
  if( (y+1 < rooms[x].length) && (rooms[x][y+1] === 0 && !path[x][y+1]) ){
    path[x][y+1] = true
    rightPath = getlength(rooms, path, x, y+1 , ++rightPath)
  }
  // 下
  let buttomPath = 0
  if( (x+1 < rooms.length ) && (rooms[x+1][y] === 0 && !path[x+1][y]) ){
    path[x+1][y] = true
    console.log('下右的path--->',path[x+1][y+1],'  (x)-->',(x+1),'  (y)-->',(y+1))
    buttomPath = getlength(rooms, path, x+1, y , ++buttomPath)
  }
  // 上
  let topPath = 0
  if( (x-1 >= 0 ) && (rooms[x-1][y] === 0 && !path[x-1][y]) ){
    path[x-1][y] = true
    topPath = getlength(rooms, path, x-1, y , ++topPath)
  }
  
  let max = leftPath + rightPath + buttomPath + topPath + len
  return max
}


function largestRoomArea(rooms) {
  //coding and coding..
  let max = 0
  let path = new Array(rooms.length);
  for(let i=0; i< path.length ; i++){
    path[i] = new Array(rooms[0].length).fill()
  }
  
  for(i =0; i<rooms.length ; i++ ){
     for(j =0; j<rooms[i].length ; j++ ){
         if(rooms[i][j] === 0 && !path[i][j]){
           path[i][j] = true
           let tmp = getlength(rooms, path, i, j , 1)
           max = max > tmp ? max : tmp
        }
     }
  }
  return max
}

// other best SOLUTION

// 太強了這個
function largestRoomArea(rooms) {
  var fill = (i,j) => (rooms[i]||[])[j] === 0 ? (rooms[i][j]=1) + fill(i-1,j) + fill(i+1,j) + fill(i,j-1) + fill(i,j+1) : 0;
  return rooms.reduce((l,x,i) => x.reduce((l,x,j) => Math.max(l, fill(i,j)), l), 0);
}