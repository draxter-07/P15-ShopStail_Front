import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import CheckoutPage from "./pages/CheckoutPage"
import CarrinhoPage from "./pages/CarrinhoPage"

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
