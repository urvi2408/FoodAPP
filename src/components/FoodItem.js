import React from 'react'
import "../App.css"
import { Link } from "react-router-dom"
import Food from "../Food.json";

const FoodItem = () => {
  return (
    <>
    <div className='fooditem'>
       {
        Food && Food?.length > 0 && Food?.map((ele)=>{
            return(
                <>
                <div className='foodcard'>
                  <Link to={`/item/${ele.id}`}>
                    <img className='image' src={ele?.image} alt="#"/>
                  </Link>
                  <p className='name'><b>{ele?.name}</b></p>
                  <p className='category'>Category : {ele?.category}</p>
                  <p className='description'>{ele?.description}</p>
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