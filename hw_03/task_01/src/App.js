import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bio from './components/Bio';
import Menu from './components/Menu';
import FamousPicture from './components/FamousPicture';
import PictureCollection from './components/PictureCollection';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Menu/>
        </header>

        <h1>Pablo Picasso website</h1>
      
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='bio' element={<Bio/>}/>
          <Route path='famous-picture' element={<FamousPicture/>}/>
          <Route path='picture-collection' element={<PictureCollection/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;