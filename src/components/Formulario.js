import React,{useEffect, useState} from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import {monedas} from '../data/moneda';


const Boton = styled.input `
margin-top:20px;
font-weight: bold;
font-size:20px;
padding:10px;
background-color: #66a2fe;
border:none;
width:100%;
border-radius: 10px;
color: #FFF;
transition: background-color: .3s ease;

&:hover {
    background-color: #326AC0;
    cursor:pointer;
}`;

const Formulario = () => {
  
    const [criptos, setCriptos ] = useState([]);
    //utilizar useMoneda
    const [moneda,SelectMonedas] = useMoneda('Elige tu moneda:','',monedas);

    //utilizar criptomoneda
    const [criptomoneda,SelectCripto] = useMoneda('Elige tu Criptomoneda','',criptos);

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
    }) 


    return(
        <form>
            <SelectMonedas />
            <SelectCripto />

            <Boton 
                type="submit"
                value="Calcular"
            />
                
        </form>
    );
}

export default Formulario; 