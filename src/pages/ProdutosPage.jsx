import styled from "styled-components"
import Topo from "./components/Topo.jsx"
import { useNavigate } from "react-router-dom"

export default function ProdutosPage() {
  const navigate = useNavigate();
  const itens = [
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", price: "5,00", quantityAvailable: "500", onCart: 0},
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", price: "7,00", quantityAvailable: "155", onCart: 0},
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", price: "7,00", quantityAvailable: "155", onCart: 0},
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", price: "7,00", quantityAvailable: "155", onCart: 0},
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", price: "5,00", quantityAvailable: "500", onCart: 0},
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", price: "7,00", quantityAvailable: "155", onCart: 0},
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", price: "7,00", quantityAvailable: "155", onCart: 0},
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", price: "7,00", quantityAvailable: "155", onCart: 0}
  ];
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
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        input{
            width: 50%;
            padding: 2px 5px;
            margin: 0px 5px 0px 0px;
            border: 1px solid rgb(0, 0, 0, 0.2);
            border-radius: 3px;
        }
        h2{
            font-size: 15px;
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
    div.children[0].style.display = "flex";
    div.children[1].style.display = "none";
  }
  return (
    <>
      <Topo/>
      <PageContent>
          <ItensCompra>
            {itens.map(item =>
            <Item>
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
                    <input placeholder="Quantidade"></input>
                    <h2>Máx: {item.quantityAvailable}</h2>
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