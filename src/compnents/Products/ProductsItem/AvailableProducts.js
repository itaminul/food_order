import React from "react";
import ProductsItem from "./ProductsItem";
import { CardWrapperProducts } from "./AvailableProducts.style";
import { CardWra } from "../../UI/Card.style";
const DUMMY_PRODUCTS = [
    {
        id: 'P1',
        name : 'Mobile',
        description : 'ddd',
        price: 100
    },
    {
        id: 'P2',
        name : 'Samsung',
        description : 'ddd',
        price: 100
    },
    {
        id: 'P3',
        name : 'Computer',
        description : 'ddd',
        price: 100
    },
    {
        id: 'P4',
        name : 'Head Phone',
        description : 'ddd',
        price: 100
    },
    {
        id: 'P5',
        name : 'Mobile',
        description : 'ddd',
        price: 100
    },
    {
        id: 'P6',
        name : 'Mobile',
        description : 'ddd',
        price: 100
    },
];
const AvailableProducts = () => {
    const productsList = DUMMY_PRODUCTS.map(product => <ProductsItem
        key={product.id} 
        name={product.name}
        description={product.description}
        price={product.price}
        />)
    return (
        <CardWra>
        <ul>
            {productsList}
        </ul>
        </CardWra>

    );
}
export default AvailableProducts;