import AddToCartReducer from "../reducers/AddToCartReducer"
import { combineReducers } from "redux";
import AddToOrderReducer from "./AddToOrderReducer";

const rootReducers = combineReducers({
   FoodReducer : AddToCartReducer,
   OrderReducer : AddToOrderReducer,
})

export default rootReducers;
