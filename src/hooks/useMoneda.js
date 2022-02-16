import React, {useState} from "react";
import styled from "@emotion/styled";

const Label = styled.label `
font-family: 'Bebas Neue',cursive;
color: #FFF;
text-transform: uppercase;
font-weight: bold;
font-size:2.4rem;
margin-top: 2rem;
  display:block;
`;
const Select = styled.select `
width: 100%;
display:block;
padding: 1rem;
-webkit-appearance:none;
border-radius: 10px;
border: none;
font-size 1.8rem`;

const useMoneda = (label,opciones) => {
    //State de nuestro custom hook
    const [state,setState] = useState('');
   
    const Seleccionar = () =>(
        <>
            <Label>{label}</Label>
            <Select
            value={state}
            onChange={e => setState(e.target.value)}
            
            >
                <option value="">Seleccione</option>

                {opciones.map(option => (
                    <option
                        key={option.id}
                        value={option.id}
                    >{option.nombre}</option>
                ))}
            </Select>
        </>
    );
    //retornar state, interfaz y fn qe modifica el state
        return [state, Seleccionar];
}

export default useMoneda;