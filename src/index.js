import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from 'reducers'
import { loadState, saveState, throttle } from 'common/helpers'
import App from 'App'

const persistedState = loadState()
const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(
  throttle(() => {
    const state = store.getState()
    saveState(state)
  }, 1000)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
