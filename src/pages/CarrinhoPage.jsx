import styled from "styled-components"
import Topo from "./components/Topo.jsx"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function CarrinhoPage() {
  const token = JSON.parse(localStorage.getItem("userShopStail"));
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  axios.defaults.headers.common['Authorization'] = token;

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/carrinho")
      .then(resposta => {setProducts(resposta.data)})
      .catch(response => alert(response.response.data));
    }, []);

  const PageContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 50px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const ItensCompra = styled.div`
    box-sizing: border-box;
    width: 50%;
    height: auto;
  `
  const Item = styled.div`
    box-sizing: border-box;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 0.5);
    margin: 20px 0px 0px 0px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img{
      width: 120px;
      height: 120px;
      margin: 0px 20px 0px 0px;
      border-radius: 10px;
    }
  `
  const DivSee = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div{
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      h1{
        font-size: 25px;
        margin: 0px 0px 10px 0px;
      }
      h2{
        font-size: 15px;
        margin: 0px 0px 5px 0px;
      }
    }
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
  const DivEdit = styled.div`
    box-sizing: border-box;
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        input{
          width: 40%;
          padding: 2px 5px;
          margin: 0px 5px 0px 0px;
          border: 1px solid rgb(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        h2{
          font-size: 15px;
        }
      }
      button{
        padding: 5px 10px;
        margin: 0px 0px 5px 0px;
        background-color: rgb(255, 85, 50);
        border: none;
        border-radius: 5px;
        color: rgb(255, 255, 255);
        font-size: 15px;
        :hover{
          background-color: rgb(70, 70, 255);
        }
      }
    }
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
    axios.post(import.meta.env.VITE_API_URL + "/carrinho", [])
      .then(resposta => navigate("/checkout"))
      .catch(response => alert(response.response.data));
  }
  function openEditMenu(e){
    const div = e.target.parentElement.parentElement;
    div.children[1].style.display = "none";
    div.children[2].style.display = "flex";
  }
  function closeEditMenu(e){
    const div = e.target.parentElement.parentElement.parentElement;
    div.children[2].style.display = "none";
    div.children[1].style.display = "flex";
  }
  function changeItem(e){
    const div = e.target.parentElement.parentElement.parentElement;
    div.children[2].style.display = "none";
    div.children[1].style.display = "flex";
  }
  if (products.length == 0){
    return(
      <>
      <Topo/>
      <PageContent>
          Você não comprou nada ainda :|
      </PageContent>
      </>
    )
  }
  return (
    <>
      <Topo/>
      <PageContent>
          <ItensCompra>
            {products.map(item =>
            <Item>
              <img src={item.image}></img>
              <DivSee>
                <div>
                  <h1>{item.title}</h1>
                  <h2>Quantidade: {item.quantity}</h2>
                  <h2>Preço total: R$ {item.totalPrice}</h2>
                </div>
                <button onClick={(e) => openEditMenu(e)}>Editar</button>
              </DivSee>
              <DivEdit>
                <div>
                  <div>
                    <input placeholder="Quantidade"></input>
                    <h2>Máx: {item.quantityAvailable}</h2>
                  </div>
                </div>
                <div>
                  <button onClick={(e) => closeEditMenu(e)}>Voltar</button>
                  <button onClick={(e) => changeItem(e)}>Salvar</button>
                </div>
              </DivEdit>
            </Item>
            )}
          </ItensCompra>
          <Botoes>
            <button onClick={toCheckout}>Finalizar compras</button>
          </Botoes>
      </PageContent>
    </>
  )
}