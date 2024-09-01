import AddToCartButton from "../product/AddToCartButton";
import CartItemCount from "./CartItemCount";
import CartItemImage from "./CartItemImage";
import CartItemTitle from "./CartItemTitle";
import Price from "../product/Price";
import RemoveFromCartButton from "../product/RemoveFromCartButton";

export default function CartItem({id, src, title, count, price})
{
    return (
        <div className="cart-item">
            <CartItemImage src={src} alt={title}/>
            <CartItemTitle text={title}/>
            
            <div className="count">
                <RemoveFromCartButton content="-" id={id}/>
                <CartItemCount count={count}/>
                <AddToCartButton content="+" id={id} src={src} title={title} price={price}/>
            </div>

            <Price price={price}/>
        </div>
    )
}