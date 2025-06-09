// const numbers = [5, 3, 8, 1, 2];
const numbers= [{points: 5}, {points: 3}, {points: 8}, {points: 1}, {points: 2}];
console.log(numbers)
numbers.sort((a, b)=> {
  return a.points - b.points;
})
console.log(numbers)
