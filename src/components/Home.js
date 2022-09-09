import React from 'react'
import FoodItem from './FoodItem'
import Footer from './Footer'
import Header from './Header'
import "../App.css"
import Category from './Category'

const Home = () => {
  return (
   <>
    <Header/>
    <Category/>
    <FoodItem/>
    <Footer/>
   </>
  )
}

export default Home