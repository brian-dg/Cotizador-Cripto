import React,{useEffect, useState} from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useMoneda from "../hooks/useMoneda";
import {monedas} from '../data/moneda';



const Boton = styled.input `
background-color: #9497FF;
border: none;
width: 100%;
padding: 10px;
color: #FFF;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
margin-top: 30px;
&:hover {
    background-color: #7A7DFE;
    cursor: pointer;
}`;

const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    
    //utilizar useMoneda
 const [moneda,SelectMonedas] = useMoneda('Elige tu moneda:',monedas);

    
    //utilizar criptomoneda
    const [criptomonedas,SelectCripto] = useMoneda('Elige tu Criptomoneda',criptos);

    useEffect(() => {
        const consultarAPI = async() => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
           
            const arrayCripto = resultado.Data.map(crypto => {
                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return objeto;
            });
            setCriptos(arrayCripto);
        }
        consultarAPI();
    },[]) 

    const handleSubmit = e => {
        e.preventDefault();
        if([moneda, criptomonedas].includes('')) {
            setError(true);
            return
        }
        setError(false);
        setMonedas({
            moneda,
            criptomonedas
        })
    }

    return(
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form 
                onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCripto /> 
                <Boton 
                    type="submit"
                    value="Calcular"
                />
                    
            </form>
        </>
    );
}

export default Formulario; 