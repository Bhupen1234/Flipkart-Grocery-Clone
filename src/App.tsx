import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductCategory from './components/ProductCategory/ProductCategory';
import GroceryDesc from './components/GroceryDesc/GroceryDesc';
import ImageGrid from './components/ImageGrid/ImageGrid';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductCategory/>
      <GroceryDesc/>
      <ImageGrid/>
    </div>
  );
}

export default App;
