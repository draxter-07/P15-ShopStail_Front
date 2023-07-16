import styled from "styled-components"
import Topo from "./components/Topo.jsx"
import { useNavigate } from "react-router-dom"

export default function CheckoutPage() {
  const navigate = useNavigate();
  const PageContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 50px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const Botoes = styled.div`
    box-sizing: border-box;
    width: 50%;
    height: auto;
    margin: 20px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    button{
      padding: 5px 10px;
      background-color: rgb(255, 85, 50);
      border: none;
      border-radius: 5px;
      color: rgb(255, 255, 255);
      font-size: 15px;
      :hover{
        background-color: rgb(70, 70, 255);
      }
    }
  `
  function toCheckout(){
    navigate("/checkout");
  }
  return (
    <>
      <Topo/>
      <PageContent>
          Compra finalizada :3
      </PageContent>
    </>
  )
}