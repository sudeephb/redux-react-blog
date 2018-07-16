import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers/root-reducer'

export default function configureStore(){
	return createStore(
		rootReducer,
   		applyMiddleware(ReduxPromise)
	)
}