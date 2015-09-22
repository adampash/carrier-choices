import React from 'react'
import Results from '../data/results'
import SocialBar from './SocialBar'

const fb_image = require('file!../assets/fb_image2.png')

export default class Result extends React.Component {
  render() {
    let { answer, carrier } = this.props
    return (
      <div>
        <div style={styles.container} className="result_container">
          <h3 style={styles.h3}>Lifehacker Recommendation:</h3>
          <h4 style={styles.h4}>{ Results[answer].headline }</h4>
          <div>
            <span dangerouslySetInnerHTML={{__html: Results[answer].text }} /> <span dangerouslySetInnerHTML={{__html: Results[answer][carrier]}} />
          </div>
        </div>
        <SocialBar
          startOver={ this.props.startOver }
          tw_text={`${Results[answer].display} is the best way for me to buy the new iPhone. Find out what works best for you here:`}
          text={"How Should You Buy Your New iPhone? This Tool Will Guide You"}
          fb_description={`${Results[answer].display} is the best bet for me.`}
          fb_image={`http://gawker-labs.com/carrier_choices/${fb_image}`}
          post_url="http://lifehacker.com/1732314719"
          app_id="504244629744626"
        />
      </div>
    )
  }
}

const styles = {
  container: {
    fontFamily: 'ElizabethSerif',
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
