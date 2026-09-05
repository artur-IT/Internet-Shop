import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.tsx'
import Contact from './components/Contact/Contact.tsx'
import NotFound from './components/NotFound.tsx'
import Product from './components/Product/Product.tsx'
import Login from './components/Login/Login.tsx'
import Register from './components/Register/Register.tsx'
import Cart from './components/Cart/Cart.tsx'
import Category from './components/Category/Category.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
