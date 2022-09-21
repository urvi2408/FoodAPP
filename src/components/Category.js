import React,{useState} from 'react'
import Food from "../Food.json"
import "../App.css"
import FoodItem from './FoodItem'

const Category = () => {


  const [data,setData] = useState(Food);
  console.log("data from category",data);

  const filterItem = (catItem) => {
      const newItem = Food.filter((x) => {
        return  x.category === catItem;
      });
      setData(newItem);
  };

  return (
    <>
    <div className='Category'>
        <img className='category_btn1' 
            src="https://i0.wp.com/trusu.ca/wp-content/uploads/2019/10/Food-Bank.png?fit=1200%2C630&ssl=1" 
            onClick={() => setData(Food)} 
            alt="#"
        />
        <img className='category_btn2' 
            src="https://tse1.mm.bing.net/th?id=OIP.4jnwQ-FxJxKYm_gL4u2ACQHaCj&pid=Api&P=0" 
            onClick={() => filterItem('Vegetables')}
            alt="#"
        />
        <img className='category_btn2' 
            src="http://static6.depositphotos.com/1006994/547/v/950/depositphotos_5471487-Chocolate-drink-text.jpg"
            onClick={() => filterItem('Drinks')}
            alt="#"
        />
        <img className='category_btn3' 
            src="https://tse2.mm.bing.net/th?id=OIP.RtQTY2-R_tpkUbFSQLnHPAHaF7&pid=Api&P=0"
            onClick={() => filterItem('Dairy Items')}
            alt="#"
        />
        <img className='category_btn4' 
            src="https://tse4.mm.bing.net/th?id=OIP.14wWGc3iEzaF5RGibk5yuAHaHa&pid=Api&P=0"
            onClick={() => filterItem('Fruit')}
            alt="#"
        />
        <img className='category_btn5' 
            src="https://media.istockphoto.com/vectors/print-vector-id884000964?k=6&m=884000964&s=612x612&w=0&h=GdR0KDZZ2zjVQLaZoWVaRCj5Jao2ZzXZu-bKIWIUYIQ="
            onClick={() => filterItem('Nuts And Seeds')}
            alt="#"
        />
    </div>
    <FoodItem data={data}/>
    </>
  )
}

export default Category