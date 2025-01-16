

const superHeroAbilities = {
  specialPower: "laserbeams",
  weakness: "kryptonite"
}

console.log(superHeroAbilities)

//If I know the name
superHeroAbilities.iKnowTheName = "I added this with dot notation"
console.log(superHeroAbilities)

//If I don't know the name
const thisPropertyShouldExistOnTheObject = "strength"
console.log(thisPropertyShouldExistOnTheObject)
superHeroAbilities[thisPropertyShouldExistOnTheObject] = 30
console.log(superHeroAbilities)