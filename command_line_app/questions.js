const fs = require('fs')
const path = require('path')

const readQuestions = () => {
  return new Promise ((resolve, reject)=> {
    console.log("I am reading questions")	
    fs.readFile(
      path.join(__dirname,"./questions.json"), 
      {
      encoding: "utf-8",
      }, 
      (err, data) =>{
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      }
    )
  })

}


module.exports = {
  readQuestions
}