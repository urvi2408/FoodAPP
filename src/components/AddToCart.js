import React from 'react'
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import {DeleteToCartItem,RemoveToCartItem} from "../Actions";
import {useDispatch} from "react-redux";
import { useParams } from 'react-router-dom';
import {AddToOrderItem} from "../Actions";


  const AddToCart = () => {

      const dispatch = useDispatch();

      const {id} = useParams();
      console.log(id);

      const FoodState  = useSelector((state) => state?.FoodReducer?.FoodList)
      console.log("data from addtocart" , FoodState);

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
                            <button className='infobtn' onClick={() => dispatch(AddToOrderItem(AddItems))}>Order Now</button><br/><br/>
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