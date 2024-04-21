// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/anaSayfa' element={<ShopCategory banner={men_banner} category="anaSayfa" />} />
          <Route path='/buket' element={<ShopCategory banner={women_banner} category="buket" />} />
          <Route path='/orkide' element={<ShopCategory banner={kid_banner} category="orkide" />} />
          <Route path='/saksi' element={<ShopCategory category="saksi" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route
            path='/cart'
            element={<Cart />}
          />
          <Route
            path='/login'
            element={<LoginSignup setShowFooter={setShowFooter} />}
          />
        </Routes>
        {showFooter && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
