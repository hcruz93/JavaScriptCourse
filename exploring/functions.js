const addUpTwoNumbers = (numberOne, numberTwo) => {

  console.log("I'm calling addUpTwoNumbers")
  console.log("These are the numbers I received", numberOne, numberTwo)
  const result = numberOne + numberTwo
  return result
}

const result= addUpTwoNumbers(2,2)
console.log("Result of the operation is", result)
