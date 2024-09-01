import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import ProductContainer from './components/products/ProductContainer';
import Categories from './components/Categories';
import { useEffect, useState } from 'react';
import NewsContainer from './components/news/NewsContainer';
import Home from './components/products/Home';
import { Provider } from 'react-redux';
import { newsStore } from './components/store/newsStore';
import { store } from './components/store/store';

function App() {
  const categories = [
    "All products", "Puzzles", "Paint", "Model kits"
  ]

  const [activeCat, setActiveCat] = useState(0);
  const [catVisibility, setCatVisibility] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const onChangeActiveCat = (index) => {
    setActiveCat(index);
    navigate(`/products/category/${categories[index]}`);
  }

  useEffect(() => {
    if (location.pathname.includes("/products/category") || location.pathname === "/products")
    {
      setCatVisibility(1);
    }
    else
    {
      setCatVisibility(0);
    }
  }, [location.pathname]);

  return (
    <div className="App">
        <header className='app-header'>
          <h1>Craft Products</h1>
          <Categories className={catVisibility ? "cat-visible" : "cat-hidden"} onClick={onChangeActiveCat} categories={categories} activeCatIndex={activeCat}/>
        </header>

        <Routes>
          <Route path='/products/' element={<Home category={categories[activeCat]} />} />
          <Route path={`/products/category/:category`} element={<Home category={categories[activeCat]} />} />
          <Route path='/products/:id' element={<Provider store={store}><ProductContainer /></Provider>} />
          <Route path='/news/:id' element={<Provider store={newsStore}><NewsContainer /></Provider>} />
          <Route path='*' element={<Home category={categories[activeCat]} />} />
        </Routes>

    </div>
  );
}

export default App;