import React from 'react'
import { useParams } from 'react-router-dom'
import "../App.css"
import Food from "../Food.json";
import FoodItem from './FoodItem';
import Footer from './Footer';
import Header from './Header';
import {useDispatch} from "react-redux";
import {AddToCartItem,AddToOrderItem} from "../Actions";

const FoodItemInfo = () => {

  const dispatch = useDispatch();

  const {id} = useParams();
  console.log(id);

  const handleClickCart =  () => {
      dispatch(AddToCartItem(Food[id]))
  }

  const handleClickOrder =  () => {
    dispatch(AddToOrderItem(Food[id]))
}
 
  return (
    <>   
    <Header/>
    <div className='FoodItemInfo'>
        <div className='leftimg'>
           <img className='img' src={Food[id]?.image} alt="#"/>
        </div>
        <div className='iteminfo'>
           <p ><b>{Food[id]?.name}</b></p>
           <p className='category'>Category : {Food[id]?.category}</p>
           <p className='description'>{Food[id]?.description}</p>
           <p className='description'>INR {Food[id]?.price}</p>
           <button className='infobtn' onClick={handleClickCart}>Add To Cart</button><br/><br/>
           <button className='infobtn' onClick={handleClickOrder}>Order Now</button>
        </div>
    </div>
    <FoodItem/>
    <Footer/>
    </>
  )
}

export default FoodItemInfo