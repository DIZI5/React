export default function Image({ src, alt })
{
    return (
        <div className="img-container">
            <img className="product-img" src={src} alt={alt} />
        </div>
    );
}