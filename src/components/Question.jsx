import React from 'react'
import Answer from './Answer'
import Radium from 'radium'

@Radium
export default class Question extends React.Component {
  handleAnswer(answer) {
    this.props.answerQuestion(this.props.index, answer)
  }

  renderAnswers() {
    let { question, response } = this.props
    let { answers } = question
    return(
      answers.map((answer) => {
        return(
          <Answer
            answer={answer}
            selected={answer.key === response}
            handleAnswer={this.handleAnswer.bind(this)}
          />
        )
      })
    )
  }

  render() {
    let { question } = this.props
    return(
      <div style={styles.questionContainer}>
        <div style={styles.question}>
          { question.text}
        </div>
        { this.renderAnswers() }
      </div>
    )
  }
}

const styles = {
  questionContainer: {
    fontFamily: 'Elizabeth Serif',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '35px',
    color: '#1A1A1A',
    backgroundColor: '#F2F2F2',
    maxWidth: '636px',
    width: '100%',
    padding: '50px',
    marginBottom: '15px',
  },
  question: {
    marginBottom: '15px',
  }
}
