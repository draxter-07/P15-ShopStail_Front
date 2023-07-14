import styled from "styled-components"
import Topo from "./components/Topo.jsx"

export default function CarrinhoPage() {
  const itens = [
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", quantity: 5},
    {title: "título", image: "https://4429028l.ha.azioncdn.net/img/2022/11/produto/11627/camiseta-preta.jpg?ims=500x700", quantity: 5}
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
    div{
      img{
        width: 120px;
        height: 120px;
        margin: 0px 20px 0px 0px;
        border-radius: 10px;
      }
      display: flex;
      flex-direction: row;
      align-items: center;
      div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1{
          font-size: 25px;
          margin: 0px 0px 10px 0px;
        }
        h2{
          font-size: 15px;
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
  return (
    <>
      <Topo/>
      <PageContent>
          <ItensCompra>
            {itens.map(item =>
            <Item>
              <div>
                <img src={item.image}></img>
                <div>
                  <h1>{item.title}</h1>
                  <h2>Quantidade: {item.quantity}</h2>
                </div>
              </div>
              <div>
                <button>Excluir</button>
              </div>
            </Item>
            )}
          </ItensCompra>
          <Botoes>
            <button>Finalizar compra</button>
          </Botoes>
      </PageContent>
    </>
  )
}