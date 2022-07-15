import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;
    const cartItemRemoveHandler = id => {

    }

    const cartItemAddHandler = item => {

    }
    const cartItems = (
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem
                 key={item.id} 
                 name={item.name}
                  amount={item.amount} 
                  price={item.price} 
                  onRemove={cartItemRemoveHandler.bind(null, item.id)}
                   onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>
    )
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div>
                <button onClick={props.onClose}>Close</button>
                {hasItem && <button>Order</button>}
            </div>
        </Modal>
        
    )
}

export default Cart;