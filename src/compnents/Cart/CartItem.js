import { CartWrapper } from "./CartItem.style";
const CartItem = (props) => {
const price = `$${props.price.toFixed(2)}`;

return(
    <CartWrapper>
        <table>
            <thead>
                <tr>
                    <th>{props.name}</th>
                    <th>{price}</th>
                    <th>{price.amount}</th>
                    <th>
                    <button onClick={props.onRemove}>-</button>
                    <button onClick={props.onAdd}>+</button>
                    </th>
                </tr>
            </thead>
        </table>
    </CartWrapper>
)
}

export default CartItem;