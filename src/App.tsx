import React from 'react'
import { Header } from './Components/Header/Header'
import { Footer } from "./Components/Footer/Footer";
import { ErrorPage } from './Pages/ErrorPage/ErrorPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './Pages/MainPage/MainPage'
import { MenuPage } from './Pages/MenuPage/MenuPage'
import { CartPage } from './Pages/CartPage/CartPage'
import { OrdersPage } from './Pages/OrdersPage/OrdersPage'
import { OrderPage } from './Pages/OrderPage/OrderPage'
import { ProfilePage } from './Pages/ProfilePage/ProfilePage'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { RegisterPage } from './Pages/RegisterPage/RegisterPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
