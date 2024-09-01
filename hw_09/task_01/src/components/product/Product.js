import AddToCartButton from "./AddToCartButton";
import Image from "./Image";
import Price from "./Price";
import RemoveFromCartButton from "./RemoveFromCartButton";
import Title from "./Title";

export default function Product({ id, src, title, price }) {
    return (
        <div className="product">
            <Image src={src} alt={title}/>
            <Title text={title}/>
            <Price price={price}/>
            <AddToCartButton content="Add to Cart" id={id} src={src} title={title} price={price}/>
            <RemoveFromCartButton content="Remove from Cart" id={id}/>
        </div>
    );
}