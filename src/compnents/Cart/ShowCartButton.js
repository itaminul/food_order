import { useContext } from "react";
import { CartBox, CartBoxSticky, ItemCount, ShowCartBox} from "../Layout/Header.style";
import CartContext from "../../store/cart-context";
const ShowCartButton = props => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
  }, 0);  
    return (
                  
            <div>
              <ShowCartBox>
                <ItemCount>
              <span onClick={props.onShowCart}>{numberOfCartItems} ITEM</span>
              </ItemCount>
              </ShowCartBox>
                {/* <CartBox onClick={props.onShowCart}>
                    <CartBoxSticky>                    
                      <ItemCount>
                        {numberOfCartItems} ITEM
                      </ItemCount>
                    </CartBoxSticky>
                  </CartBox> */}

            </div>
    )
    
}

export default ShowCartButton;