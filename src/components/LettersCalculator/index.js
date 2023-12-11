// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, inputPhrase: ''}

  onChangeLetters = event => {
    const inputValue = event.target.value
    this.setState({count: inputValue.length, inputPhrase: inputValue})
  }

  render() {
    const {count, inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="input-label">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeLetters}
            className="input-letters"
            value={inputPhrase}
          />
          <p className="count">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
