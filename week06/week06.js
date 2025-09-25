// =====no.1=====
function calculate(nums, compute) {  return compute(nums) }
function sum(elements) {  return elements.reduce((total, current) => total + current)  }
function max(elements) {  return Math.max(...elements)  }
function min(elements) {  return Math.min(...elements)  }
function sort(elements) {  return elements.sort((a, b) => a - b)  }
console.log(calculate([1, 3, 5, 7], sum))
console.log(calculate([100, 3, 5, 7], max))
console.log(calculate([10, 2, 0, 7], min))
console.log(calculate([10, 2, 0, 7], sort))


// =====no.2=====
function counter() {
  let count = 0
  function increment() {
    return ++count
  }
  function decrement() {
    return --count
  }
  function getCount() {
    return count
  }
  return {
    add: increment,
    decrese: decrement,
    getCountValue: getCount,
  }
}
const { add, getCountValue } = counter()
console.log(add())
console.log(getCountValue())
 

// =====no.3=====
function a() { return sum }
function b() { return sum(1,5) }
function c(x) { return x }
function sum(n1, n2) { return n1 + n2 }

console.log(typeof a()); // function
console.log(typeof b()); // number
console.log(typeof c(sum)); // function
