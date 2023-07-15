import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import CheckoutPage from "./pages/CheckoutPage"
import CarrinhoPage from "./pages/CarrinhoPage"
import ProdutosPage from "./pages/ProdutosPage"
import LoginPage from "./pages/LoginPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

