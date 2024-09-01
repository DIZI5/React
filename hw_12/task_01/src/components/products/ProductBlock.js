import { useNavigate } from "react-router-dom";

export default function ProductBlock({ id, title, img, price })
{
    const navigate = useNavigate();

    const viewProductDetails = () => {
        navigate(`/products/${id}`);
    }

    return (
        <div className="product-block" onClick={viewProductDetails}>
            <div className="product-img-container">
                <img className="product-block-img" src={img} alt={title}/>
            </div>

            <h3 className="title">{title}</h3>
            <h4 className="price">{price}</h4>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
}