const friends = ["Rachel", "Monica", "Phoebe"]

const printFriend = (friend, index) => {
  console.log(friend, index, "inside printFriend")
}

friends.forEach(printFriend)

friends.forEach((friend, index) => {  
  console.log(friend, index, "inside anonymous forEach") 
})