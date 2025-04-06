import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Products from './Pages/Products.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import Store from './Context/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Store >

    <BrowserRouter >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>

    </Store>
  </StrictMode>
)
