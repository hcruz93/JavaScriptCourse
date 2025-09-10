import axios from "axios"

export const makeGuess = (player, guess) => {
  return axios({
    method: "POST",
    url: "http://localhost:3331/guess",
    data:{
      player: player,
      guess: guess,
    },
  })
}