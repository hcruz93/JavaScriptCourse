const questions = [
  {
    prompt: "In what year was the first Star wars movie released?",
    answer: 1977,
    correctAnswerOffset: 0,
    closeAnswerOffset: 5,
  },
  {
    prompt: `At the time of release, Titanic (1997) was the most expensive 
    movie ever made. How did it cost to produce in US dollars? (Answer in millions of USD)`,
    answer: 210,
    correctAnswerOffset: 50,
    closeAnswerOffset: 100,

  },
  {
    prompt: `How many people did Arnold Schwarzenegger kill on screen in all of
    his movies combined? (Data by alloutabubblegum.com)`,
    answer: 895,
    correctAnswerOffset: 200,
    closeAnswerOffset: 500,

  },
]


module.exports = {
  questions,
}