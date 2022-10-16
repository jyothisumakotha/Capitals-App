import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    text: countryAndCapitalsList[0].country,
  }

  onCountry = id => {
    const res = countryAndCapitalsList.filter(eachItem => eachItem.id === id)
    const {country} = res[0]
    this.setState({text: country})
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <div className="capitals-container">
          <h1 className="title">Countries And Capitals</h1>
          <div className="container-1">
            <select className="select-bar">
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="country-name"
                  key={eachItem.id}
                  value={eachItem.id}
                  onClick={this.onCountry}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country?</p>
          </div>
          <h1 className="capital">{text}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
