import { BUY_MILK } from "./MilkType"

const initialState = {
    numOfMilk: 8
}

const milkReducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_MILK: return{
            ...state,
            numOfMilk: state.numOfMilk - 1
        } 
        default: return state
    }
}

export default milkReducer