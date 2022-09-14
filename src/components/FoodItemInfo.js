import React from 'react'
import { useParams } from 'react-router-dom'
import "../App.css"
import Food from "../Food.json";
import FoodItem from './FoodItem';
import Footer from './Footer';
import Header from './Header';
import {useDispatch} from "react-redux";
import {AddToCartItem,increment} from "../Actions";

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
    <div className='FoodItemInfo'>
        <div className='leftimg'>
           <img className='img' src={Food[id]?.image} alt="#"/>
        </div>
        <div className='iteminfo'>
           <p className='name'><b>{Food[id]?.name}</b></p>
           <p className='category'>Category : {Food[id]?.category}</p>
           <p className='description'>{Food[id]?.description}</p>
           <button className='infobtn' onClick={handleClick}>Add To Cart</button><br/><br/>
           <button className='plus' onClick={() => dispatch(increment(Food[id]))}>+</button>
           <input className='inputnumber' type="text" placeholder={Food[id].quantity}/>
           <button className='minus'>-</button>
        </div>
    </div>
    <FoodItem/>
    <Footer/>
    </>
  )
}

export default FoodItemInfo