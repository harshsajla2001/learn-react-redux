import { combineReducers } from "redux";
import cakeReducer from './cake/CakeReducer'
import iceCreamReducer from "./iceCream/IceReducer";
import milkReducer from "./milk/MilkReducer";
import userReducer  from "./user/UserReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    milk: milkReducer,
    user: userReducer
})

export default rootReducer