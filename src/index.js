import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReduser } from './redux/rootReduser.js'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { insertID } from './dataProcessing/insertID'
import { phoneCheck } from './dataProcessing/phoneCheck'
import { dataValidate } from './dataProcessing/dataValidate'
import { checkDuplicate } from './dataProcessing/checkDuplicate'


const store = createStore(rootReduser, compose(
  applyMiddleware(
    thunk, insertID, phoneCheck, dataValidate, checkDuplicate
  ),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
