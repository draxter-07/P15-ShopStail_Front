import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import CheckoutPage from "./pages/CheckoutPage"
import CarrinhoPage from "./pages/CarrinhoPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

