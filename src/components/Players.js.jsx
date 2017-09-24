import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Player from './Player.js.jsx'

class Players extends Component {
  render() {
    const that = this
    const players = this.props.players.map(player =>
      <Player key={player.id} store={that.props.store} {...player} />
    )
    return (
      <div>
        <h2>Players List</h2>
        <ul>{players}</ul>
      </div>
    )
  }
}

Players.propTypes = {
  players: PropTypes.array,
  store: PropTypes.object
}

export default Players
