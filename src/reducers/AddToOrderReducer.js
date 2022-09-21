const intialstate={
    OrderList: []
}

const AddToOrderReducer = ( state =  intialstate , action ) => {
    console.log("data from order reducer",action?.payload?.id);

    switch (action.type) {

        
        case "TOTALPRICE":
            const priceList = state?.OrderList?.map((ele)=>{
                console.log("element",ele);
                if(ele?.OrderList?.id === action?.payload?.id){
                    return {
                        ...ele,
                        price : ele?.OrderList?.price * action?.payload?.quantity
                    };
                }
                return ele;
            })
            console.log("price");
            return {
                ...state,
                OrderList:priceList
            };

        case "ADD_ORDER_ITEM": 
            return {
                ...state,
                OrderList:[
                    ...state?.OrderList,
                    {
                        OrderList:action?.payload?.id,
                    }
                ]
            }

        case "DELETE_ORDER_ITEM":
            const newOrderList = state?.OrderList?.filter((curElem) => 
            {
                console.log("curElem",state);
                return curElem?.OrderList?.id  !== action?.payload?.id?.OrderList?.id
            }
            )
            console.log("newOrderList",state);
            return {
                ...state,
                OrderList:newOrderList
            };


        case "REMOVE_ORDER_ITEM":
            return {
                ...state,
                OrderList:[]
            };

                
        default:
        return state;
    } 
};

export default AddToOrderReducer;