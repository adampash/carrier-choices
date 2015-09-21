import { ANSWER_QUESTION } from '../actions/questions'
import Questions from '../data/questions'

const initialState = Questions[0]

export function question(state=initialState, action) {
  switch (action.type) {
  case ANSWER_QUESTION:
    return action.text
  default:
    return state
  }
}
