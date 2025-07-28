import axios from "axios"

export const addPlayer = (playerName) => {
  return axios({
    method: "POST",
    url: "http://localhost:3331/players",
    data: {
      name: playerName,
    },
  })
}