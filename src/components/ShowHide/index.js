// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}
  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }
  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }
  render() {
    const {firstName, lastName} = this.state
    const userFirstName = firstName ? 'firstName-bg' : null
    const userLastName = lastName ? 'lastName-bg' : null
    const first = firstName ? 'Joe' : ''
    const last = lastName ? 'Jonas' : ''
    return (
      <div className="bg flex-align">
        <h1>Show/Hide</h1>
        <div>
          <button type="button" onClick={this.onFirstName}>
            Show/Hide Firstname
          </button>
          <button type="button" onClick={this.onLastName}>
            Show/Hide lastname
          </button>
        </div>
        <div className={`${userFirstName}`}>
          <p>{`${first}`}</p>
        </div>
        <div className={`${userLastName}`}>
          <p>{`${last}`}</p>
        </div>
      </div>
    )
  }
}

export default ShowHide
