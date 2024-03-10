import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./style/main.scss";
import Layout from "./comps/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Qara from "./pages/Qara";
import WomenBanner from './comps/assets/hero/slider-2.png';
import MenBanner from './comps/assets/hero/slider-2.png';
import KidsBanner from './comps/assets/hero/slider-2.png';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Women' element={<Category category="WOMEN" banner={WomenBanner} />} />
          <Route path='/Men' element={<Category category="MEN" banner={MenBanner} />} />
          <Route path='/Kids' element={<Category category="KIDS" banner={KidsBanner} />} />
          <Route path='/Qara' element={<Qara />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
