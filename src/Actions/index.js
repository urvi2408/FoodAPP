export const AddToCartItem = (Food) => {
    console.log("data from add action",Food);
    return (dispatch) => {
        dispatch({
        type:"ADD_FOOD_ITEM",
        payload : {
            Food:Food
        }
        })
    }
}

export const DeleteToCartItem = (Food) => {
    console.log("data from delete action",Food); 
    return (dispatch) => {
        dispatch({
        type:"DELETE_FOOD_ITEM",
        payload : {
            Food:Food
        }
        })
    }
}

export const RemoveToCartItem = (Food) => {
    console.log("data from delete action",Food); 
    return (dispatch) => {
        dispatch({
        type:"REMOVE_FOOD_ITEM",
        payload : {
            Food:Food
        }
        })
    }
}

export const increment = (Food) => {
    console.log("data from increment action",Food); 
    return (dispatch) => {
        dispatch({
        type:"INCREMENT",
        payload : {
            Food:Food
        }
        })
    }
}