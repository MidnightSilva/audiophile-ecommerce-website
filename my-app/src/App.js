import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navi from "./components/nav"
import Cart from "./components/Cart"
import Checkout from "./pages/Checkout"
import CategoryHeadphones from "./pages/CategoryHeadphones"
import CategorySpeakers from './pages/CategorySpeakers';
import CategoryEarphones from "./pages/CategoryEarphones";
import ProductDetailSpeakers from "./pages/ProductDetailSpeakers"
import ProductDetailEarphones from "./pages/ProductDetailEarphones"
import ProductDetailHeadphones from './pages/ProductDetailHeadphones';

import "./scss/Nav.scss";
import "./scss/variables.scss"

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Headphones" element={<CategoryHeadphones />} />
        <Route path="/Speakers" element={<CategorySpeakers />} />
        <Route path="/Earphones" element={<CategoryEarphones />} />
        <Route
          path="/ProductDetailSpeakers"
          element={<ProductDetailSpeakers />}
        />
        <Route
          path="/ProductDetailHeadphones"
          element={<ProductDetailHeadphones />}
        />
        <Route
          path="/ProductDetailEarphones"
          element={<ProductDetailEarphones />}
        />
      </Routes>
    </div>
  );
}

export default App;
