import AddToCartReducer from "../reducers/AddToCartReducer"
import { combineReducers } from "redux";

const rootReducers = combineReducers({
   FoodReducer : AddToCartReducer,
})

export default rootReducers;