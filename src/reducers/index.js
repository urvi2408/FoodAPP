import AddToCartReducer from "../reducers/AddToCartReducer"
import QuantityReducer from "./QuantityReducer"
import { combineReducers } from "redux";

const rootReducers = combineReducers({
   FoodReducer : AddToCartReducer,
   QuantityReducer : QuantityReducer,
})

export default rootReducers;