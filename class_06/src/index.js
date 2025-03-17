import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";
import Error from "./pages/Error";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/products/:id"} element={<ProductDetails />} />
        <Route path={"*"} element={<Error />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
