import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/App'
import FirstPage from './containers/FirstPage'
import NoMatch from './components/NoMatch'
import './index.css'

import { Router, Route, browserHistory } from 'react-router'

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="firstpage" component={FirstPage}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
, document.getElementById('root')
)

