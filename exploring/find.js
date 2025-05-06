const animals = [
  {
    name: "Dog",
  },
  {
    name:"Cat",
    colour:"black",
  },
  {
    name:"Cat",
    colour:"white",
  },
  {
    name:"Bird",
  },
]

const foundAnimal = animals.find((animal)=>{
  return animal.name === "Cat"
})

console.log(foundAnimal) // { name: 'Cat' }