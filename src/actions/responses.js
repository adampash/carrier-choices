export const ANSWER_QUESTION = 'ANSWER_QUESTION'

//
// action creators
//

export function answerQuestion(questionIndex, answer) {
  return {
    type: ANSWER_QUESTION,
    index: questionIndex,
    answer
  }
}
