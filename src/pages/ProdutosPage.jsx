import styled from "styled-components"
import Topo from "./components/Topo.jsx"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProdutosPage() {
  const token = JSON.parse(localStorage.getItem("userShopStail"));
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  axios.defaults.headers.common['Authorization'] = token;

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/produtos")
      .then(resposta => {setProducts(resposta.data)})
      .catch(response => alert(response.response.data));
    }, []);

  const PageContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 50px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const ItensCompra = styled.div`
    box-sizing: border-box;
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `
  const Item = styled.div`
    box-sizing: border-box;
    width: 31%;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 0.5);
    margin: 20px 0px 0px 0px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    :hover{
      box-shadow: 0px 0px 7px 2px rgb(0, 0, 0, 0.5);
    }
  `
  const DivVenda = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    img{
      width: 100%;
      height: 200px;
      border-radius: 10px;
      margin: 0px 0px 10px 0px;
    }
    div{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      h1{
        font-size: 25px;
        margin: 0px 0px 10px 0px;
      }
      h2{
        font-size: 15px;
        margin: 0px 0px 10px 0px;
      }
    }
  `
  const DivCompra = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h1{
      font-size: 25px;
      margin: 0px 0px 10px 0px;
    }
    button{
      width: 100%;
      padding: 8px 10px;
      background-color: rgb(255, 85, 50);
      border: none;
      border-radius: 5px;
      color: rgb(255, 255, 255);
      font-size: 15px;
      :hover{
        background-color: rgb(70, 70, 255);
      }
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        margin: 0px 0px 10px 0px;
        div{
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          h2{
            font-size: 15px;
          }
        }
    }
  `
  function BotaoComprar(atr){
    const But = styled.button`
        width: 100%;
        padding: 8px 10px;
        background-color: ${atr.onCart == 0 ? "rgb(255, 85, 50)" : "rgb(0, 0, 0, 0.2)"};
        border: none;
        border-radius: 5px;
        color: rgb(255, 255, 255);
        font-size: 15px;
        :hover{
          background-color: ${atr.onCart == 0 ? "rgb(70, 70, 255)" : "rgb(0, 0, 0, 0.2)"};
        }
    `
    return(<But disabled={atr.onCart == 0 ? false : true} onClick={(e) => openCompraMenu(e)}>{atr.onCart == 0 ? "Comprar" : "No carrinho"}</But>)
  }
  function openCompraMenu(e){
    const div = e.target.parentElement.parentElement;
    div.children[1].style.display = "flex";
    div.children[0].style.display = "none";
  }
  function closeCompraMenu(e){
    const div = e.target.parentElement.parentElement;
    div.children[0].style.display = "flex";
    div.children[1].style.display = "none";
  }
  function addToCart(e){
    const div = e.target.parentElement.parentElement;
    const inputValue = e.target.parentElement.children[1].children[0].children[0].value;
    const totalPrice = e.target.parentElement.children[1].children[1].children[1].value;
    const title = e.target.parentElement.parentElement.children[0].children[1].children[0].innerHTML;
    const image = e.target.parentElement.parentElement.children[0].children[0].src
    const quantityAvailable = e.target.parentElement.children[1].children[0].children[1].innerHTML.toString().replace("Máx: ", "");
    div.children[0].style.display = "flex";
    div.children[1].style.display = "none";
    let newObj = {_id: div.id, quantity: inputValue, totalPrice: totalPrice, title: title, image: image, quantityAvailable: quantityAvailable};
    axios.post(import.meta.env.VITE_API_URL + "/produtos", newObj)
      .then(resposta => {setProducts(resposta.data)})
      .catch(response => alert(response.response.data));
  }
  function totalPrice(e, price){
    let quantity = e.target.value;
    let input = e.target.parentElement.parentElement.children[1].children[1];
    if (quantity == null){
      quantity = 0;
    }
    let total = (quantity*price).toString();
    for (let a = 0; a < total.length; a++){
      if (total[a] == "." && a == total.length - 2){
        total = total + "0";
        break;
      }
      else if (total[a] != "." && a == total.length - 1){
        total = total + ".00";
        break;
      }
    }
    input.value = total;
  }
  function Quantity(atr){
    const Quantity = styled.input`
      width: 50%;
      padding: 2px 5px;
      border: 1px solid rgb(0, 0, 0, 0.2);
      border-radius: 3px;
    `
    return(<Quantity placeholder="Quantidade" onChange={(e) => totalPrice(e, atr.price)}></Quantity>)
  }
  function Price(){
    const Pri = styled.input`
      border: none;
      font-size: 15px;
      width: 20%;
      padding: none;
      margin: 0px 0px 2px 0px;
    `
    return(<Pri></Pri>)
  }
  return (
    <>
      <Topo/>
      <PageContent>
          <ItensCompra>
            {products.map(item =>
            <Item id={item._id.toString()}>
              <DivVenda>
                <img src={item.image}></img>
                <div>
                  <h1>{item.title}</h1>
                  <h2>R$ {item.price}</h2>
                </div>
                <BotaoComprar onCart={item.onCart}/>
              </DivVenda>
              <DivCompra>
                <button onClick={(e) => closeCompraMenu(e)}>Voltar</button>
                <div>
                  <div>
                    <Quantity price={item.price}/>
                    <h2>Máx: {item.quantityAvailable}</h2>
                  </div>
                  <div>
                    <h2>Preço total: R$ </h2>
                    <Price/>
                  </div>
                </div>
                <button onClick={(e) => addToCart(e)}>Adicionar ao carrinho</button>
              </DivCompra>
            </Item>
            )}
          </ItensCompra>
      </PageContent>
    </>
  )
}