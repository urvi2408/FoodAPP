const intialstate={
    FoodList: []
}

const QuantityReducer = ( state =  intialstate , action ) => {
    console.log("data from reducer",action?.payload?.Food);

    switch (action.type) {
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
            })
            console.log("newFoodList",increment);
            return{
                ...state,
                FoodList:increment
            }
            
            
              

        default:
        return state;
    } 
};

export default QuantityReducer;