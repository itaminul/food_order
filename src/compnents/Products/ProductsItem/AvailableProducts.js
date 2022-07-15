import React from "react";
import ProductsItem from "./ProductsItem";
import { CardWrapperProducts } from "./AvailableProducts.style";
import { CardWra } from "../../UI/Card.style";
const DUMMY_PRODUCTS = [
    {
        id: 'P1',
        name : 'Samsung Mobile',
        price: 100
    },
    {
        id: 'P2',
        name : 'Telivision',
        price: 200
    },
    {
        id: 'P3',
        name : 'Freeze',
        price: 400
    },
    {
        id: 'P4',
        name : 'Head Phone',
        price: 500
    },
    {
        id: 'P5',
        name : 'Busket',
        price: 600
    },
    {
        id: 'P6',
        name : 'Kooking',
        price: 700
    },
];
const AvailableProducts = () => {
    const productsList = DUMMY_PRODUCTS.map(product => <ProductsItem
        key={product.id} 
        id={product.id}
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