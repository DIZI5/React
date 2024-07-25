import { useContext } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Products()
{
  const { theme, changeTheme } = useContext(ThemeContext);

  const products = [
    {
      id: 1,
      img: "https://content.rozetka.com.ua/goods/images/big/24689398.jpg",
      title: "Миша Bloody P91s USB Black",
      price: "949₴"
    },
    {
      id: 2,
      img: "https://content2.rozetka.com.ua/goods/images/big/88330240.jpg",
      title: "Клавіатура провідна A4Tech KV-300H USB",
      price: "1299₴"
    },
    {
      id: 3,
      img: "https://content2.rozetka.com.ua/goods/images/big_tile/24709344.jpg",
      title: "Миша Logitech G102 Lightsync USB Black",
      price: "1299₴"
    },
    {
      id: 4,
      img: "https://content2.rozetka.com.ua/goods/images/big/290189384.jpg",
      title: "Клавіатура дротова Logitech G413 SE Mechanical Tactile Switch USB UA Black",
      price: "3999₴"
    },
    {
      id: 5,
      img: "https://content1.rozetka.com.ua/goods/images/big/406372522.jpg",
      title: "Ігрова поверхня Logitech G740 L Black",
      price: "1522₴"
    },
    {
      id: 6,
      img: "https://content1.rozetka.com.ua/goods/images/big/378870632.jpg",
      title: "Навушники RZTK Buds TWS Black",
      price: "629₴"
    },
    {
      id: 7,
      img: "https://content1.rozetka.com.ua/goods/images/big/392327478.jpg",
      title: "Акустична система RZTK Plasma 20 Вт RGB",
      price: "1099₴"
    },
    {
      id: 8,
      img: "https://content1.rozetka.com.ua/goods/images/big/11910952.jpg",
      title: "Флеш пам'ять USB Samsung Bar Plus USB 3.1 256GB Black",
      price: "1899₴"
    },
  ];

  return (
    <div className={theme}>
      <header className="App-header">
        <Counter/>
        <button onClick={changeTheme}>{theme}</button>
      </header>

      <div className="products">
        {products.map(product => {
          return (
            <Product id={product.id} src={product.img} title={product.title} price={product.price}/>
          );
        })}
      </div>
    </div>
  );
}