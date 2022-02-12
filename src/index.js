import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import "./index.css";
import Store from "./Store";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Store>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Store>
  </BrowserRouter>,
  rootElement
);
