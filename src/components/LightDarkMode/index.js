// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickBtn = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    let modeCls
    const {isDarkMode} = this.state
    const modeText = isDarkMode
      ? ((modeCls = 'dark-mode'), 'Light Mode')
      : ((modeCls = 'light-mode'), 'Dark Mode')
    return (
      <div className="bg-container">
        <div className={modeCls}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.onClickBtn} className="button">
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
