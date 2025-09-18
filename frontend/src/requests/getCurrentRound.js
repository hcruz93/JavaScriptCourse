import axios from "axios"

export const getCurrentRound = () => {
  return axios ({
    method: "GET",
    url:"http://localhost:3331/round/current"
  })
}