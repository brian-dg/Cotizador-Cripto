import React, {Fragment,useState} from "react";
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

const useMoneda = (label,options) => {
    //State de nuestro custom hook
    const [state,setState] = useState('stateI');
    const onChange = e => {
        setState(e.target.value)
    }
    const Seleccionar = () =>(
        <Fragment>
            <Label>{label}</Label>
            <Select
            onChange={onChange}
            value={state}
            >
                <option value="">---Seleccione---</option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>{option.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );
    //retornar state, interfaz y fn qe modifica el state
        return [state, Seleccionar];
}

export default useMoneda;