import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./style/main.scss";
import Layout from "./comps/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Men' element={<Category />} />
          <Route path='/Women' element={<Cart />} />
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
