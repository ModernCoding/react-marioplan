import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { reduxFirestore, createFirestoreInstance, getFirestore }
  from 'redux-firestore'

import { ReactReduxFirebaseProvider, getFirebase }
  from 'react-redux-firebase'

import firebase, { fbConfig } from './config/fbConfig'


const store = createStore(
    rootReducer,

    compose(
      applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore })
      ),

      reduxFirestore(firebase, fbConfig)
    )
  )


const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()