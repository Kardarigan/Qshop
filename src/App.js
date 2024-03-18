import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./style/main.scss";
import Layout from "./comps/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Single from "./pages/Single";
import WomenBanner from './comps/assets/hero/slider-2.png';
import MenBanner from './comps/assets/hero/slider-2.png';
import KidsBanner from './comps/assets/hero/slider-2.png';
import TheContextProvider from "./comps/functions/TheContext";
import QaraProducts from "./comps/QaraProducts";

function App() {
  return (
    <TheContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Women' element={<Category category="WOMEN" banner={WomenBanner} title="Stylish Women's Fashion" />} />
            <Route path='/Men' element={<Category category="MEN" banner={MenBanner} title="Men's Essentials" />} />
            <Route path='/Kids' element={<Category category="KIDS" banner={KidsBanner} title="Cute and Comfortable Kids' Clothing" />} />
            <Route path='/Qara' element={<QaraProducts />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/:category/Product' element={<Single />}>
              <Route path=':productId' element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </TheContextProvider>
  );
}

export default App;
