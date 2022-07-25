import { Fragment, useState } from "react";
import Header from "../Layout/Header";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import ShowCartButton from "../Cart/ShowCartButton";

function Ecommerce() {

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
      <Header/>
    
        <ShowCartButton  onShowCart={showCartHandler} />   
      <Products />
    </CartProvider>
  );
}

export default Ecommerce;
