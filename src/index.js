import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Players from './components/Players.js.jsx'
import reducer from './reducers'

const store = createStore(reducer)

const render = () => ReactDOM.render(
  <Players store={store} {...store.getState()} />, document.getElementById('root')
)
store.dispatch({type: 'INITIAL_LOAD'})

render()
store.subscribe(render)
