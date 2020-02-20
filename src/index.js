
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if(matrix === undefined || matrix.length===0) return [];
  else{
  for(let i = 1; i<matrix.length; i+=2)
  {
    matrix[i].reverse();
  }
  for(let i in matrix)
  {
    for(let j in matrix[i])
    {
      res.push(matrix[i][j]);
    }
  }
  return res;
}
}
