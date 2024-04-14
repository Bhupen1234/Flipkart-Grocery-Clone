import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductCategory from './components/ProductCategory/ProductCategory';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductCategory/>
    </div>
  );
}

export default App;
