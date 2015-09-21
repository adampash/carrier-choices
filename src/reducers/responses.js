import {
  ANSWER_QUESTION,
  SHOW_RESULT,
  CLEAR_RESULT,
  CLEAR_RESPONSES,
} from '../actions/responses'

export function responses(state={}, action) {
  switch (action.type) {
  case ANSWER_QUESTION:
    return {
      ...state,
      [action.question]: action.answer.key
    }
  case CLEAR_RESPONSES:
    return {}
  default:
    return state
  }
}

export function result(state=null, action) {
  switch (action.type) {
  case SHOW_RESULT:
    return action.key
  case CLEAR_RESULT:
    return null
  default:
    return state
  }
}
