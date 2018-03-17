var ary = [5, 25, 10, 11, 1, 3000000000];
console.log(ary.sort());

console.log(ary.sort(function(x, y){
  return x - y; 
}));