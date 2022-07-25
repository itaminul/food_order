import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
import { CardWra, CartTotalAmont, CartButton } from "../UI/Card.style";
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
            <CardWra>
            {cartItems}
            <CartTotalAmont>
                <span>Total Amount </span>
                <span>{totalAmount}</span>
            </CartTotalAmont>
            </CardWra>
        </Modal>
        
    )
}

export default Cart;