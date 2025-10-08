export const gameState = {
  players: [
    {
        name: "Chandler",
        points: 0,
    },
    {
        name: "Joey",
        points: 0,
    },
    {
        name: "Ross",
        points: 0,
    },
  ],
  guesses: {
	  "hardcoded": [
      {
        "player": "Ross",
        "guess": 1977
      },
      {
        "player": "Joey",
        "guess": 1991
      },
      {
        "player": "Chandler",
        "guess": 1976
      },
    ]
  },
  rounds: [
    {
      "id": "hardcoded",
      "questionId": "star-wars-release",
    },
  ],
  points: {},
}


// TODO: Bring back, only hard-coding for testing
// export const gameState = {
//   players: [],
//   guesses: {},
//   rounds: [],
//   points: {},
// }

