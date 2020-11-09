var number=7;

function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

var f=factorial(number);
console.log(f);

var factorialReq=function(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialReq(num - 1));
  }
}

console.log(factorialReq(number));