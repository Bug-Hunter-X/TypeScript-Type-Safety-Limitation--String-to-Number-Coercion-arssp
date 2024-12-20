function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return "Invalid input: Both arguments must be numbers";
  }
}

let result1 = addSafe(5, 3); // Returns 8
let result2 = addSafe("hello", 5); // Returns "Invalid input: Both arguments must be numbers"
console.log(result1,result2); 