import { useFormStatus } from "react-dom";

export default function AddToCartFormStatus(){
    const { pending, data } = useFormStatus();
    const itemTitle = data?.get('itemTitle')
    return  pending && <p>{`Adding ${itemTitle} to cart..`}</p>
}