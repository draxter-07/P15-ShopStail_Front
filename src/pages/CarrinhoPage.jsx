import styled from "styled-components"
import Topo from "./components/Topo.jsx"

export default function CarrinhoPage() {
  const PageContent = styled.div`
    width: 100%;
    height: auto;
    padding: 50px 0px 0px 0px;
  `
  return (
    <>
      <Topo/>
      <PageContent>
          Você está na página Carrinho
      </PageContent>
    </>
  )
}