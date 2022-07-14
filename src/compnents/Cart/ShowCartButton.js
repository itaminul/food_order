import { Fragment, useState } from "react";
import foodImage from '../../assets/food_order_banner.png'
import { CartBox, CartBoxSticky, ShopingBagBox, ItemCount, DollorCount  } from "../Layout/Header.style";
import Cart from "./Cart";
import HeaderCartButton from "../Layout/HeaderCartButton";
import CartProvider from "../../store/CartProvider";
const ShowCartButton = props => {
    
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
             <HeaderCartButton />
        <CartBox>
        <CartBoxSticky onClick={showCartHandler}>
          <ItemCount>
            1 ITEM
          </ItemCount>

          <DollorCount>
            $ 150
            </DollorCount>
        </CartBoxSticky>
      </CartBox>

      </CartProvider>
    )
    
}

export default ShowCartButton;