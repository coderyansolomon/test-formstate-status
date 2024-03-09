import { useFormState } from "react-dom";
import { addToCart } from "./actions.js";
import AddToCartFormStatus from "./AddToCartFormStatus.jsx";

export default function AddToCartForm({itemID, itemTitle}) {
    const [formState, formAction] = useFormState(addToCart, {message:0, size: 0});
    console.log({formState})
    return (
        <>
            <form action={formAction}>
                    <h2>{itemTitle}</h2>
                    <input type="hidden" name="itemID" value={itemID} />
                    <input type="hidden" name="itemTitle" value={itemTitle} />
                    <button type="submit">Add to Cart</button>
                    {formState.message}
                    <AddToCartFormStatus />
            </form>
            <h6>Cart Size: {formState.size}</h6>
        </>
    

    );
  }