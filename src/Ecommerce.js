import { useState } from "react";
import Header  from "./compnents/Layout/Header";
import Products from "./compnents/Products/Products";
import Cart from "./compnents/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ShowCartButton from "./compnents/Cart/ShowCartButton";

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
