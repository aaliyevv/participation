var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce((acc, current) => acc + current, 0);
var average = sum / numbers.length;
var min = Math.min(1, 2, 3, 4, 5);
var max = Math.max(1, 2, 3, 4, 5);

console.log('Sum:', sum);
console.log('Average:', average);
console.log('Min:', min);
console.log('Max:', max);
