import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bio from './components/Bio';
import Menu from './components/Menu';
import FamousPicture from './components/FamousPicture';
import Home from './components/Home';
import PictureList from './components/PictureList';
import Picture from './components/Picture';
import PictureLayout from './components/PictureLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Menu/>
        </header>

        <h1>Pablo Picasso's website</h1>
      
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='bio' element={<Bio/>}/>
          <Route path='famous-picture' element={<FamousPicture/>}/>
          <Route path='pictures' element={<PictureLayout/>}>
            <Route index element={<PictureList />} />
            <Route path=":id" element={<Picture/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;