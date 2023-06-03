import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          onClick={this.onSubscribe}
          className="subscribe-button"
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
