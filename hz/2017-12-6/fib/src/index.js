exports.hello = 'Hello World';
exports.hello = 'Hello World';
var fib = function(n) {
  switch(n) {
  case 0:
  case '0':
  case 1:
  case '1':
    return 1;
  default:
    if (n > 1) {
      return fib(n-2) + fib(n-1);
    }
    if (n < 0) {
      throw new Error ('error input');
    }
  }
};
exports.fib = fib;
