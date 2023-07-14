import styled from "styled-components"

export default function Topo(){
    const Top = styled.div`
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        z-index: 1;
        background-color: rgb(255, 85, 50);
        div{
            width: 20px;
            height: 100%;
            background-color: rgb(70, 70, 255);
        }
    `
    return(
        <Top>
            <div></div>
        </Top>
    )
}