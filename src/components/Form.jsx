import React from 'react'
import Question from './Question.jsx'
import { answerQuestion, showResult } from '../actions/responses'
import Questions from '../data/questions'
import Key from '../data/key'
import Radium from 'radium'

@Radium
export default class Form extends React.Component {
  renderQuestions() {
    const {
      dispatch,
      question,
      responses,
      numAnswered
    } = this.props
    let result = this.calculateResult()

    let complete = typeof result === 'string'
    return Questions.map( (question, index) => {
      return(
        <Question
          key={index}
          active={ index <= numAnswered }
          question={question}
          index={index}
          response={responses[index]}
          na={ index >= numAnswered && complete === true }
          answerQuestion={(questionIndex, answer) => {
            dispatch(answerQuestion(questionIndex, answer))
          }}
        />
      )
    })
  }

  calculateResult() {
    let { responses } = this.props
    return (
      Object.keys(responses).reduce( (acc, current) => {
        if (typeof acc === 'string') return acc
          let key = responses[current]
        if (typeof acc[key] === 'string') {
          // result = acc[key]
          return acc[key]
        } else {
          return acc[key]
        }
      }, Key)
    )

  }

  handleSubmit() {
    if (typeof this.calculateResult() !== 'string')
      return alert('Make sure to answer all of the questions first!')
    const { dispatch } = this.props
    dispatch(showResult(this.calculateResult()))
  }

  render() {
    return(
      <div>
        { this.renderQuestions() }
        <button style={ styles.button }
          onClick={ this.handleSubmit.bind(this) }
          >
          Submit
        </button>
      </div>
    )
  }
}

const styles = {
  button: {
    fontFamily: 'ProximaNovaCond',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '24px',
    color: '#709602',
    maxWidth: '300px',
    height: '50px',
    backgroundColor: 'white',
    border: '1px solid #709602',
    textAlign: 'center',
    display: 'block',
    margin: '0 auto',
    outline: 'none',
    cursor: 'pointer',
    ':hover': {
      color: 'white',
      backgroundColor: '#709602'
    }
  }
}

