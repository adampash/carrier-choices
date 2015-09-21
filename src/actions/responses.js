export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const SHOW_RESULT = 'SHOW_RESULT'
export const CLEAR_RESPONSES = 'CLEAR_RESPONSES'
export const CLEAR_RESULT = 'CLEAR_RESULT'

//
// action creators
//

export function answerQuestion(question, answer) {
  return {
    type: ANSWER_QUESTION,
    question,
    answer
  }
}

export function showResult(key) {
  return {
    type: SHOW_RESULT,
    key
  }
}

export function clearResult() {
  return {
    type: CLEAR_RESULT
  }
}
export function clearResponses() {
  return {
    type: CLEAR_RESPONSES
  }
}
