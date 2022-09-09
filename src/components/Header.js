import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"

const Header = () => {
  return (
    <div className='header'>
       <h1 className='foodapp_lite'>Food APP Lite</h1>
       <Link to="/cart">
          <button className='addtocart'>Add To Cart</button>
       </Link>
    </div>
  )
}

export default Header