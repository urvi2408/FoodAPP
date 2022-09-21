import './App.css';
import Home from './components/Home';
import { BrowserRouter , Route ,Routes} from "react-router-dom"
import FoodItemInfo from './components/FoodItemInfo';
import {Provider} from "react-redux";
import store from './Store';
import AddToCart from './components/AddToCart';
import OrderItem from "../src/components/OrderItem"

function App() {
  return (
    <>
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/item/:id" element={<FoodItemInfo/>}/>
        <Route path='/cart' element={<AddToCart/>}/>
        <Route path='/order' element={<OrderItem/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
    </>
  );
}

export default App;
