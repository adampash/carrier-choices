export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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


export function test(text) {
  return { type: TEST, text }
}

export function testAsync(text) {
  return dispatch => {
    // dispatch optimistic update
    dispatch(test(text))
    setTimeout(() => {
      // dispatch final update
      dispatch(test(`${text} async`))
    }, 1000)
  }
}

