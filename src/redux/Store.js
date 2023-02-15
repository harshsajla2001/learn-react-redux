import { legacy_createStore   } from 'redux'
import cakeReducer from "./cake/CakeReducer";

const store = legacy_createStore(cakeReducer)

export default store