import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductBlock from "./ProductBlock";

export default function ProductList({ category })
{
    const products = useSelector((state) => state);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (category === "All products")
        {
            setFilteredProducts(products);
        }
        else
        {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    }, [products, category]);

    return (
        <div className="products-container">
            {
                filteredProducts.map(product => {
                    return (
                        <ProductBlock key={product.id} id={product.id} title={product.title} img={product.imgs[0]} price={product.price} />
                    );
                })
            }
        </div>
    );
}