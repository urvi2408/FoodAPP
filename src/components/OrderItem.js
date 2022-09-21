import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import {DeleteToCartItem,RemoveToCartItem} from "../Actions";
import {useDispatch} from "react-redux";
import {totalPrice} from "../Actions";
import {AddToCartItem,DeleteToOrderItem,RemoveToOrderItem} from "../Actions";
import { useParams } from 'react-router-dom'
import Food from "../Food.json";

const OrderItem = () => {

    const dispatch = useDispatch();

    const {id} = useParams();
    console.log(id);

    const OrderState  = useSelector((state) => state?.OrderReducer?.OrderList)
    console.log("data from addtoorder" , OrderState);

    const handelChange = (quantity,id) => {
      console.log("idandquantity",id,quantity);
      dispatch(totalPrice(quantity,id));
    }


    // const handleClickCart =  () => {
    //   dispatch(AddToCartItem(Food[id]))
    // }
  
    return (
      <>
      <Header/>
      <div className='AddToCart'>
        {
          console.log("orderstate",OrderState)
        }
          {
              OrderState && OrderState.length > 0 && OrderState.map((ele) => {
                console.log('ele',ele );
  
                  const AddItems = ele?.OrderList;
                  console.log('AddItems',AddItems);
                  return(
                      <>
                      <div className='FoodItemInfo'>
                           <div className='leftimg'>
                           <img className='img' src={AddItems?.image} alt="#"/>
                      </div>
                      <div className='iteminfo'>
                           <p ><b>{AddItems?.name}</b></p>
                           <p className='category'>Category : {AddItems?.category}</p>
                           <p className='description'>{AddItems?.description}</p>
                           <p className='description'>INR {AddItems?.price}</p>
                           <select onChange={(e) => handelChange(e.target.value,AddItems?.id)}>
                               <option value="select quantity">select quantity</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                           </select>
                           <p>Total price : INR {ele?.price}</p>
                           {/* <button className='infobtn' onClick={handleClickCart}>Add To Cart</button> */}

                           <button onClick={() => dispatch(DeleteToOrderItem(ele))}>Remove From Order</button>
                      </div>
      </div>
      </>
                  )
              }) 
          }
          <button className='clearButton' onClick={() => dispatch(RemoveToOrderItem(OrderState))}>clear</button>
       
      </div>
      <Footer/>
      </>
    )
}

export default OrderItem