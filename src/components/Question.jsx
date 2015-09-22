import React from 'react'
import Answer from './Answer'
import Radium from 'radium'

@Radium
export default class Question extends React.Component {
  handleAnswer(answer) {
    this.props.answerQuestion(this.props.index, answer)
  }

  renderAnswers() {
    let { question, response, na, active } = this.props
    let { answers } = question
    return(
      answers.map((answer, index) => {
        return(
          <Answer
            answer={answer}
            key={ index }
            selected={answer.key === response}
            handleAnswer={this.handleAnswer.bind(this)}
            inactive={na || !active}
          />
        )
      })
    )
  }

  render() {
    let { question, active, na } = this.props
    let containerStyle = styles.questionContainer
    if ( !active || na )
      containerStyle = { ...containerStyle, ...styles.inactive }
    return(
      <div style={ containerStyle } className="result_container">
        <div style={styles.question}>
          { question.text}
        </div>
        { this.renderAnswers() }
        {(!active || na) &&
          <div style={styles.cover} className="result_container">
            { na &&
              <div style={ styles.na }>
                This question is not applicable given your previous answers.
              </div>
            }
          </div>
        }
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
    padding: '45px 50px',
    marginBottom: '15px',
    position: 'relative'
  },
  question: {
    marginBottom: '15px',
  },
  inactive: {
    color: '#ccc'
  },
  cover: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '45px 50px',
  },
  na: {
    // fontWeight: 'normal',
    // fontFamily: 'ProximaNovaCond',
    color: '#1a1a1a'
  }
}
