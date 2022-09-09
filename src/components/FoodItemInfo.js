import React from 'react'
import { useParams } from 'react-router-dom'
import "../App.css"
import Food from "../Food.json";
import Category from './Category';
import FoodItem from './FoodItem';
import Footer from './Footer';
import Header from './Header';
import {useDispatch} from "react-redux";
import {AddToCartItem} from "../Actions";

const FoodItemInfo = () => {

    const dispatch = useDispatch();

    const {id} = useParams();
    console.log(id);

    const handleClick =  () => {
        dispatch(AddToCartItem(Food[id]))
    }

  return (
    <>   
    <Header/>
    <Category/>
    <div className='FoodItemInfo'>
        <div className='leftimg'>
           <img className='img' src={Food[id]?.image} alt="#"/>
        </div>
        <div className='iteminfo'>
           <p className='name'><b>{Food[id]?.name}</b></p>
           <p className='category'>Category : {Food[id]?.category}</p>
           <p className='description'>{Food[id]?.description}</p>
           <button className='infobtn' onClick={handleClick}>Add To Cart</button>
        </div>
    </div>
    <FoodItem/>
    <Footer/>
    </>
  )
}

export default FoodItemInfo