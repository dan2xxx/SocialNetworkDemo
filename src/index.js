import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppWrapper from './App'
import store from './redux/redux-store'

export const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>

      <Provider store={store}>
        <AppWrapper />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

// initial render
rerender()

window.store = store

// callback rerender function
// store.subscribe(rerender);
