export default function CartItemImage({ src, alt })
{
    return (
        <img className="cart-item-img" src={src} alt={alt}/>
    );
}