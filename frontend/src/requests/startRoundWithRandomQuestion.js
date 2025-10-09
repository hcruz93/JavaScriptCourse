import axios  from "axios"

export const startRoundWithRandomQuestion = () => {
   return axios({
    method: "POST",
    url: "http://localhost:3331/round/start/randomquestion",
    validateStatus: () => {
      return true
    }
   })
}