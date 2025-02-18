const sayBoom = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Boom!")
      resolve()
    }, 2000)
  })
}

const main = async () => {
  console.log("In 2 seconds, I'm wanna shoot you with a laser gun!")
  await sayBoom()
  console.log("You're dead!")

}

main() // the function is async, but don use await, so it will run in the background