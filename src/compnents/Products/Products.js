import React, { Fragment} from "react";
import ProductsSummary from "./ProductsSummary";
import AvailableProducts from "./ProductsItem/AvailableProducts";
import { ProductsSummaryContent, AvailableProductsDetails } from "./Products.style";
const Products = () => {
    return(
        <Fragment>         
          
            {/* <ProductsSummaryContent>
              <ProductsSummary />
            </ProductsSummaryContent> */}
             <div class="p-2 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
             <AvailableProducts />
              </div>
            
        </Fragment>      

    )
}
export default Products;