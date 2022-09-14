import React from 'react'
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import {DeleteToCartItem,RemoveToCartItem} from "../Actions";
import {useDispatch} from "react-redux";

const AddToCart = () => {

  const dispatch = useDispatch();

  const FoodState  = useSelector((state) => state?.FoodReducer?.FoodList)
  console.log("data from addtocart" , FoodState);

  return (
    <>
    <Header/>
    <div className='AddToCart'>
        {
            FoodState && FoodState.length > 0 && FoodState.map((ele) => {

                const AddItems = ele?.FoodList;

                return(
                    <>
                    <div className='FoodItemInfo'>
                         <div className='leftimg'>
                         <img className='img' src={AddItems?.image} alt="#"/>
                    </div>
                    <div className='iteminfo'>
                         <p className='name'><b>{AddItems?.name}</b></p>
                         <p className='category'>Category : {AddItems?.category}</p>
                         <p className='description'>{AddItems?.description}</p>
                         <button onClick={() => dispatch(DeleteToCartItem(ele))}>Remove From Add To Cart</button>
                    </div>
    </div>
    </>
                )
            }) 
        }
        <button className='clearButton' onClick={() => dispatch(RemoveToCartItem(FoodState))}>clear</button>
    </div>
    <Footer/>
    </>
  )
}

export default AddToCart