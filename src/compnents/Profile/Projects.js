import { Fragment, useState } from "react";
import Header from "../Layout/Header";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import ShowCartButton from "../Cart/ShowCartButton";
import FoodImage from '../../assets/food_order_banners.png'
import { MainImage } from '../../compnents/Layout/Header.style'
function Projects() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      
      {cartIsShown && <Cart onClose={hideCartHandler} /> }
      {/* <Header/> */}
    
        <ShowCartButton  onShowCart={showCartHandler} />  
        <img style={{width: '100%', height: '180px'}} src={FoodImage} alt='Food' />
      <Products />
    </CartProvider>
  );
}

export default Projects;