import React, { useContext} from "react";
import {ProductsCard} from './ProductsItem.style'
import ProductsItemForm from "./ProductsItemForm";
import { AddTocartButton } from "./ProductsItemForm.style";
import CartContext from "../../../store/cart-context";
const ProductsItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$ ${props.price.toFixed(2)}`;
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });

    };
    return(
        <ProductsCard>
        
        <li style={{listStyleType: "none",  borderBottom: "1px solid black"}}>
            <div>
                <h3>{props.name}</h3>               
                <div>{price}</div>
            </div>
            <div>
                <ProductsItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
        </ProductsCard>

    )
}
export default ProductsItem;