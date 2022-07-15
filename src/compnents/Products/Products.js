import React, { Fragment} from "react";
import ProductsSummary from "./ProductsSummary";
import AvailableProducts from "./ProductsItem/AvailableProducts";
import { ProductsSummaryContent, AvailableProductsDetails } from "./Products.style";
const Products = () => {
    return(
        <Fragment>         
          
            <ProductsSummaryContent>
              <ProductsSummary />
            </ProductsSummaryContent>
            <AvailableProductsDetails>
              <AvailableProducts />
            </AvailableProductsDetails>
            
        </Fragment>      

    )
}
export default Products;