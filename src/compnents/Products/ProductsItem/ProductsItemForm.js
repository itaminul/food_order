import { useRef, useState } from "react";
import { FormContainer, AddTocartButton } from "./ProductsItemForm.style";
import Input from "../../UI/Input";

const ProductsItemForm = (props) => { 
    const [amountIsValid, setAmountIsValid] = useState(true);
       const amountInputRef = useRef();


        const submitHandler = event => {
            event.preventDefault();

            const enteredAmount = amountInputRef.current.value;
            const enteredAmountNumber = +enteredAmount;

            if (
                enteredAmount.trim().length === 0 ||
                enteredAmount < 1 ||
                enteredAmount > 5
            ) {
                setAmountIsValid(false);
                return;
            }
            props.onAddToCart(enteredAmountNumber);
      };

       
    
     return(
        <FormContainer>
        <form onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label="Item"
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
            />
            <AddTocartButton>
         
        <button>+ Add</button>    
        {!amountIsValid && <p>Please enter a valid amoint(1-5)</p>}        
        </AddTocartButton>
        </form>
        </FormContainer>
        
    )
}

export default ProductsItemForm;