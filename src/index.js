import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, reduxFirestore, getFirestore} from 'redux-firestore'
import {ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
	// useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }


const store = createStore(rootReducer, 
	compose(
		// reactReduxFirebase(firebase, config),
		applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
		reduxFirestore(firebase, fbConfig),
		// reactReduxFirebase(firebase, config)
	)
);

const rrfProps = {
	firebase,
	config:rrfConfig,
	dispatch:store.dispatch,
	createFirestoreInstance,
}


function AuthIsLoaded({ children }) {
	const auth = useSelector(state => state.firebase.auth)
if (!isLoaded(auth)) return <img src="/loading.gif"/>;
	return children
  }

ReactDOM.render(
	  <React.StrictMode>
	  <Provider store={store}>
		  <ReactReduxFirebaseProvider {...rrfProps}>
			  <AuthIsLoaded>
		    	<App />
			  </AuthIsLoaded>
		  </ReactReduxFirebaseProvider>
	  </Provider>
	  </React.StrictMode>,
	  document.getElementById('root')
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

