import { useContext } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return(
        <button onClick={props.onClick}>
            <span>Icon</span>

            <span>Your Cart</span>
            <span>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;