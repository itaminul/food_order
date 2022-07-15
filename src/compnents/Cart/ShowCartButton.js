import { useContext } from "react";
import { CartBox, CartBoxSticky, ItemCount} from "../Layout/Header.style";
import CartContext from "../../store/cart-context";
const ShowCartButton = props => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
  }, 0);  
    return (
                  
            <div>
                <CartBox onClick={props.onShowCart}>
                    <CartBoxSticky>                    
                      <ItemCount>
                        {numberOfCartItems} ITEM
                      </ItemCount>
                      {/* <DollorCount>
                        $ 150
                        </DollorCount> */}
                    </CartBoxSticky>
                  </CartBox>

            </div>
    )
    
}

export default ShowCartButton;