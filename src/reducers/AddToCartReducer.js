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

        case "INCREMENT":
            // console.log("inc",state);
            const increment = state?.FoodList?.map((curElem) => 
         
            {
                console.log("state",state);
                console.log(curElem,"curElem");
                if (curElem?.FoodList?.id  !== action?.payload?.Food?.id);{
                return {
                    ...curElem,
                    quantity:curElem?.quantity+1
                };
            }
            
            return curElem;
            }
        
            )
            
            console.log("newFoodList",increment);
            return{
                ...state,
                FoodList:increment
            }
            
            
              

        default:
        return state;
    } 
};

export default AddToCartReducer;