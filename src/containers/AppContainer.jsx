import React from 'react'
import { connect, dispatch } from 'react-redux'
import Form from '../components/Form'
import Result from '../components/Result'
import { clearResult, clearResponses } from '../actions/responses'


export default class AppContainer extends React.Component {
  renderResult() {
    let { result, responses, dispatch } = this.props
    let carrier = responses[0]
    return (
      <Result
        answer={ result }
        carrier={ carrier }
        startOver={() => {
          dispatch(clearResult())
          dispatch(clearResponses()) 
        }}
      />
    )
  }

  render() {
    let { result } = this.props
    if (result) {
      return this.renderResult()
    } else {
      return(
        <Form {...this.props} />
      )
    }
  }
}

function select(state) {
  return {
    responses: state.responses,
    numAnswered: Object.keys(state.responses).length,
    result: state.result
  }
}

export default connect(select)(AppContainer)
