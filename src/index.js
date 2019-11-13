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

import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'
// import 'firebase/firestore'
// import 'firebase/analytics'
// import 'firebase/auth'


// const fbConfig = {
//   apiKey: "AIzaSyAf4MLFy1HjQv0rA2lW3A1q0RIHPkcttPc",
//   authDomain: "mb-marioplan.firebaseapp.com",
//   databaseURL: "https://mb-marioplan.firebaseio.com",
//   projectId: "mb-marioplan",
//   storageBucket: "mb-marioplan.appspot.com",
//   messagingSenderId: "187825392813",
//   appId: "1:187825392813:web:01c9a793dd439d76418a24",
//   measurementId: "G-ZHX896BM9B"
// }


// firebase.initializeApp(fbConfig)
// firebase.analytics()
// firebase.firestore()


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