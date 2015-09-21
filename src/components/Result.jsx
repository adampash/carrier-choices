import React from 'react'
import Results from '../data/results'
import SocialBar from './SocialBar'

export default class Result extends React.Component {
  render() {
    let { answer, carrier } = this.props
    return (
      <div>
        <div style={styles.container}>
          <h3 style={styles.h3}>Lifehacker Recommendation:</h3>
          <h4 style={styles.h4}>{ Results[answer].headline }</h4>
          <div>
            { Results[answer].text } { Results[answer][carrier] }
          </div>
        </div>
        <SocialBar startOver={ this.props.startOver } />
      </div>
    )
  }
}

const styles = {
  container: {
    fontFamily: 'Elizabeth Serif',
    fontSize: '20px',
    lineHeight: '35px',
    color: '#1A1A1A',
    backgroundColor: '#F2F2F2',
    maxWidth: '636px',
    width: '100%',
    padding: '50px',
    marginBottom: '15px',
  },
  h3: {
    color: '#709602',
    fontSize: '20px',
    lineHeight: '35px',
    margin: 0,
    padding: 0,
  },
  h4: {
    margin: 0,
    padding: 0,
  }
}
