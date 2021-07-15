import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showHideFirstname: true, showHideLastname: true}

  getFirstName = () => {
    this.setState(prev => {
      if (prev.showHideFirstname) {
        return {showHideFirstname: false}
      }
      return {showHideFirstname: true}
    })
  }

  getLastName = () => {
    this.setState(prev => {
      if (prev.showHideLastname) {
        return {showHideLastname: false}
      }
      return {showHideLastname: true}
    })
  }

  render() {
    const {showHideFirstname, showHideLastname} = this.state
    return (
      <div className="show-hide-bg-container">
        <div className="show-hide-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="buttons-section">
            <div className="button-section">
              <button
                className="button"
                type="button"
                onClick={this.getFirstName}
              >
                Show/Hide Firstname
              </button>

              {showHideFirstname ? null : (
                <h1 className="show-hide-text">Joe</h1>
              )}
            </div>

            <div className="button-section">
              <button
                className="button"
                type="button"
                onClick={this.getLastName}
              >
                Show/Hide Lastname
              </button>
              <div>
                {showHideLastname ? null : (
                  <h1 className="show-hide-text">Jonas</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
