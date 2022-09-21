const intialstate={
    FoodList: []
}

const AddToCartReducer = ( state =  intialstate , action ) => {
    console.log("data from cart reducer",action?.payload);

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

        case "DELETE_FOOD_ITEM":
            const newFoodList = state?.FoodList?.filter((curElem) => 
            {
               console.log("curElem",state);
               return curElem?.FoodList?.id  !== action?.payload?.Food?.FoodList?.id
            }
            )
            console.log("newFoodList",state);
            return {
                ...state,
                FoodList:newFoodList
            };

        case "REMOVE_FOOD_ITEM":
            return {
                ...state,
                FoodList:[]
            };

        default:
        return state;
    } 
};

export default AddToCartReducer;