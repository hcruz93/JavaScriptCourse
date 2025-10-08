import axios from "axios"

export const getRoundAnswer = () => {
  return axios({
    method: "GET",
    url: "http://localhost:3331/round/current/answers",
  })
}