import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import {DeleteToCartItem,RemoveToCartItem} from "../Actions";
import {useDispatch} from "react-redux";
// import {useSelector} from "react-redux";
import {totalPrice} from "../Actions";
import Food from "../Food.json"
import { useParams } from 'react-router-dom';
import {AddToCartItem,AddToOrderItem} from "../Actions";


  const AddToCart = () => {

  const dispatch = useDispatch();

  const {id} = useParams();
  console.log(id);

  const FoodState  = useSelector((state) => state?.FoodReducer?.FoodList)
  console.log("data from addtocart" , FoodState);

  const handelChange = (quantity,id) => {
    console.log("idandquantity",id,quantity);
    dispatch(totalPrice(quantity,id));
  }

  const handleClickOrder =  () => {
    dispatch(AddToOrderItem(Food[id]))
  }

  return (
    <>
    <Header/>
    <div className='AddToCart'>
      {
        console.log('FoodState',FoodState)
      }
        {
            FoodState && FoodState.length > 0 && FoodState.map((ele) => {
              console.log('ele',ele );

                const AddItems = ele?.FoodList;
                console.log('AddItems',AddItems);
                return(
                    <>
                    <div className='FoodItemInfo'>
                         <div className='leftimg'>
                         <img className='img' src={AddItems?.image} alt="#"/>
                    </div>
                    <div className='iteminfo'>
                         <p><b>{AddItems?.name}</b></p>
                         <p className='category'>Category : {AddItems?.category}</p>
                         <p className='description'>{AddItems?.description}</p>
                         <p className='description'> INR {AddItems?.price}</p>
                         {/* <select onChange={(e) => handelChange(e.target.value,AddItems?.id)}>
                             <option value="select quantity">select quantity</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="more than 3">more than 3</option>
                         </select>
                         <p>Total Price : INR {ele?.price}</p> */}
                                    <button className='infobtn' onClick={() => dispatch(AddToOrderItem(AddItems))}>Order Now</button>

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