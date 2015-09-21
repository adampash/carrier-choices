import React from 'react'
import { connect, dispatch } from 'react-redux'
import Question from '../components/Question.jsx'
import { answerQuestion } from '../actions/questions'
import Questions from '../data/questions'


let AppContainer = React.createClass({
  renderQuestions() {
    const {
      dispatch,
      question,
      responses
    } = this.props
    return Questions.map( (question, index) => {
      return(
        <Question
          key={index}
          question={question}
          index={index}
          response={responses[index]}
          answerQuestion={(questionIndex, answer) => {
            dispatch(answerQuestion(questionIndex, answer))
          }}
        />
      )
    })
  },

  render() {
    return(
      <div>
        { this.renderQuestions() }
      </div>
    )
  }
})

function select(state) {
  return state
}

export default connect(select)(AppContainer)
