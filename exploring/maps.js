const friends = ["Alice", "Bob", "Charlie", "Diana"]

const initials = friends.map((friend,index) => {
  return `${friend[0]} --- ${index}`
})

console.log(initials)