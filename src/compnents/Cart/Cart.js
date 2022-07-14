import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
    const cartItems = (
        <ul>
            {[{ id: 'c1', name: 'Mobiile', amount: 2, price: 12.99}].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div>
                <button onClick={props.onClose}>Close</button>
                <button>Order</button>
            </div>
        </Modal>
        
    )
}

export default Cart;