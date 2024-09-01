import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bio from './components/Bio';
import Menu from './components/Menu';
import FamousPicture from './components/Picture/FamousPicture';
import Home from './components/Home';
import PictureList from './components/Picture/PictureList';
import Picture from './components/Picture/Picture';
import PictureLayout from './components/Picture/PictureLayout';
import AddPicture from './components/Picture/AddPicture';

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
            <Route path="add-pic" element={<AddPicture/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;