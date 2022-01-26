import React from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";

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
    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar Estado Unidense'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra'}
]
    //utilizar useMoneda
    const [moneda,SelectMonedas] = useMoneda('Elige tu moneda:','',MONEDAS);

    //utilizar criptomoneda
    const [criptomoneda,SelectCripto] = useCriptomoneda('Elige tu Criptomoneda','');
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