import { legacy_createStore, applyMiddleware   } from 'redux'
import rootReducer from './RootReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

const store = legacy_createStore(rootReducer,composeWithDevTools( applyMiddleware(logger, thunk)))

export default store