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
        <>
        <div class="max-w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <ul class="max-w-7xl text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="max-w-7xl py-2 px-4 w-96 rounded-t-lg border-b border-gray-200 dark:border-gray-600">{productsList}</li>
        
        </ul>
       </div>
        </>

    );
}
export default AvailableProducts;