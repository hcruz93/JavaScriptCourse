const animals = [
  {name: 'Cat', onLand: true},
  {name: 'Dog', onLand: true},
  {name: 'Fish', onLand: false},    
  {name: 'Frog', onLand: true},
  {name: 'Turtle', onLand: false},
]

const landAnimals = animals.filter((animal)=>{
  return !animal.onLand

})

console.log(landAnimals)