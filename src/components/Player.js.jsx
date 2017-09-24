import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Player extends Component {
  constructor(props) {
    super(props)
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
  }

  handleCheckboxClick(e) {
    this.props.store.dispatch({type: 'SWITCH_CHECK', playerId: this.props.id})
  }

  render() {
    const name = `${this.props.first_name} ${this.props.last_name}`
    return (
      <li>
        <label htmlFor={this.props.id}>{name}</label>
        <input onChange={this.handleCheckboxClick} checked={this.props.isChecked} type='checkbox' id={this.props.id}/>
      </li>
    )
  }
}

Player.propTypes = {
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool
}

export default Player
