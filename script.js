// Spread Operator

const first = [1, 2 , 3];
const second = [9, 8 , 7];


const one = first.concat(second);

const two = [...first,5,...second,'a'];

console.log(one);
console.log(two);