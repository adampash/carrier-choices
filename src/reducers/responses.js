import { ANSWER_QUESTION } from '../actions/responses'

export function responses(state={}, action) {
  switch (action.type) {
  case ANSWER_QUESTION:
    return {
      ...state,
      [action.question]: action.answer.key
    }
  default:
    return state
  }
}


