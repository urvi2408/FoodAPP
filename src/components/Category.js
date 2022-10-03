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
            src="https://fontmeme.com/temporary/a63804cef7e0aaf56e9f9d4576824e5e.png" 
            onClick={() => setData(Food)} 
            alt="#"
        />
        <img className='category_btn2' 
            src="https://fontmeme.com/temporary/3dc69b7c0153af7a900eacc4134524f7.png" 
            onClick={() => filterItem('Vegetables')}
            alt="#"
        />
        <img className='category_btn2' 
            src="https://fontmeme.com/temporary/590fb4f11a3c9cb02c78e03933c502bf.png"
            onClick={() => filterItem('Drinks')}
            alt="#"
        />
        <img className='category_btn3' 
            src="https://fontmeme.com/temporary/98c23f619880226581414a0dc5959aa0.png"
            onClick={() => filterItem('Dairy Items')}
            alt="#"
        />
        <img className='category_btn4' 
            src="https://fontmeme.com/temporary/f87bd3c6d1c4124c3557c4b19d167aec.png"
            onClick={() => filterItem('Fruit')}
            alt="#"
        />
        <img className='category_btn5' 
            src="https://fontmeme.com/temporary/893d050770818da1e89306b8bd3826de.png"
            onClick={() => filterItem('Nuts And Seeds')}
            alt="#"
        />
    </div>
    <FoodItem data={data}/>
    </>
  )
}

export default Category