import React from 'react'
import "../App.css"
import { Link } from "react-router-dom"

const FoodItem = ({data}) => {
  return (
    <>
    <div className='fooditem'>
       {
        data && data?.length > 0 && data?.map((ele)=>{
            return(
                <>
                <div className='foodcard'>
                  <Link to={`/item/${ele.id}`}>
                    <img className='image' src={ele?.image} alt="#"/>
                  </Link>
                  <p className='name'><b>{ele?.name}</b></p>
                </div>
                </>
            );
        })
       }
    </div>
    </>
  );
}

export default FoodItem
