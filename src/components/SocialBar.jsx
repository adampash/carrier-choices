import React from 'react'
import Isvg from 'react-inlinesvg'
import Tappable from 'react-tappable'

const tw_img = require('file!../assets/tw.svg')
const fb_img = require('file!../assets/fb.svg')

export default class SocialBar extends React.Component {
  tweet(e) {
    var link
    link = "https://twitter.com/home?status=" + (encodeURIComponent(this.props.tw_text)) + " " + (encodeURIComponent(this.props.post_url))
    window.open(link)
    return e.preventDefault()
  }

  fb(e) {
    var app_id, description, picture, text, url
    description = encodeURIComponent(this.props.fb_description)
    picture = encodeURIComponent(this.props.fb_image)
    text = encodeURIComponent(this.props.text)
    app_id = this.props.app_id
    url = `https://www.facebook.com/dialog/feed?description=${description}&picture=${picture}&name=${text}&link=${encodeURIComponent(this.props.post_url)}&app_id=${app_id}&display=page&redirect_uri=${encodeURIComponent(this.props.post_url)}`
    window.open(url)
    return e.preventDefault()
  }

  startOver(e) {
    e.preventDefault()
    return this.props.startOver()
  }

  render() {
    return (
      <div className="social">
        <div className="start-over">
          <a href="#" onClick={this.startOver.bind(this)}>Start over</a>
        </div>
        <Tappable className="button" onClick={this.tweet.bind(this)}><a href="#"><Isvg src={tw_img} className="button" /></a></Tappable>
        <Tappable className="button" onClick={this.fb.bind(this)}><a href="#"><Isvg src={fb_img} className="button" /></a></Tappable>
      </div>
    )
  }
}
