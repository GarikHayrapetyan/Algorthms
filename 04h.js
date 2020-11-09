var points = [40, 100, 1, 5, 25, 10];

function sortArr() {
  points.sort(function(a, b){return a-b});
  
}
sortArr();
console.log("second greatest number:"+points[[points.length-2]]);
console.log("second lowest number:"+points[1]);