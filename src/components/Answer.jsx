import React from 'react'
import Radium from 'radium'

@Radium
export default class Answer extends React.Component {
  handleClick() {
    this.props.handleAnswer(this.props.answer)
  }

  render() {
    let { answer } = this.props

    let style = styles.answer
    let dotStyle = styles.dot
    if (this.props.inactive) {
      style = {...style, ...styles.inactive}
      dotStyle = {...dotStyle, ...styles.inactiveDot}
    }
    else if (this.props.selected) {
      style = {...style, ...styles.selected}
      dotStyle = {...dotStyle, ...styles.dotSelected}
    }
    return(
      <div style={style} onClick={this.handleClick.bind(this)}>
        <div style={dotStyle}>&nbsp;</div>{ answer.text }
      </div>
    )
  }
}

const styles = {
  answer: {
    fontFamily: 'ElizabethSerif',
    fontWeight: 'normal',
    // fontSize: '20px',
    // lineHeight: '35px',
    color: '#1A1A1A',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    ':hover': {
      color: '#709602',
    },
  },
  selected: {
    color: '#709602',
    fontWeight: 'bold',
  },
  dot: {
    width: '16px',
    height: '16px',
    // borderRadius: '50%',
    // borderRadius: '8px',
    border: '2px solid black',
    padding: 0,
    marginRight: '22px',
  },
  dotSelected: {
    backgroundColor: '#709602',
    border: '2px solid #709602',
    // border: 'none'
  },
  inactive: {
    color: '#ccc',
  },
  inactiveDot: {
    border: '2px solid #ccc'
  }
}

