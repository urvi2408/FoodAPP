const intialstate={
    FoodList: []
}

const AddToCartReducer = ( state =  intialstate , action ) => {
    console.log("data from reducer",action?.payload?.Food);

    switch (action.type) {
        case "ADD_FOOD_ITEM": 
        return {
            ...state,
            FoodList:[
                ...state.FoodList,
                {
                    FoodList:action?.payload?.Food
                }
            ]
        }
        default:
        return state;
    } 
};

export default AddToCartReducer;