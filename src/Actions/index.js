export const AddToCartItem = (Food) => {
    console.log("data from action",Food);
    return (dispatch) => {
        dispatch({
        type:"ADD_FOOD_ITEM",
        payload : {
            Food:Food
        }
        })
    }
}
