import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function signIn(){
        const obj = {email: email, password: password};
        axios.post(import.meta.env.VITE_API_URL + "/login", obj)
            .then(resposta => {
                localStorage.setItem("userShopStail", JSON.stringify(resposta.data));
                navigate("/produtos");
            })
            .catch(response => alert(response.response.data));
    }
    return(
        <div>
            <input placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <input placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button onClick={signIn}>Aqui</button>
        </div>
    )
}