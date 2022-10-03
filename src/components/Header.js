import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import "../App.css"

const Header = () => {

  const FoodState  = useSelector((state) => state?.FoodReducer)
  console.log("data from addtocart" , FoodState);

  const OrderState  = useSelector((state) => state?.OrderReducer)
  console.log("data from addtoorder" , OrderState);

  return (
    <div className='header'>
      <div>
         <Link to="/">
         <h1 className='foodapp_lite'>Food APP Lite</h1>
       </Link>
       </div>
       <div>
         <Link to="/cart">
            <button className='addtocart'>Cart  ({FoodState?.FoodList?.length})</button>
         </Link>
         <Link to="/order">
            <button className='addtocart'>My Order ({OrderState?.OrderList?.length})</button>
         </Link>
       </div>
    </div> 
  )
}

export default Header