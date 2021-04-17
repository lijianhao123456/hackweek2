import { createStore, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const allReducers = combineReducers({

})

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))