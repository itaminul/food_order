import { Fragment, useState } from "react";
import Header  from "./compnents/Layout/Header";
import { CartBox,CartBoxSticky, ShopingBagBox, ItemCount, DollorCount } from "./compnents/Layout/Header.style";
import shopingBag from './assets/shoping_bag.jpg'
import Products from "./compnents/Products/Products";
import Cart from "./compnents/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ShowCartButton from "./compnents/Cart/ShowCartButton";

function App() {

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

export default App;
