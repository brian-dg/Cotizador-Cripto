import React, {Fragment,useState} from "react";

const useMoneda = (label,stateI,options) => {
    //State de nuestro custom hook
    const [state,setState] = useState(stateI);
    const onChange = e => {
        setState(e.target.value)
    }
    const Seleccionar = () =>(
        <Fragment>
            <label>{label}</label>
            <select
            onChange={onChange}
            >
                <option value="">---Seleccione---</option>
                {options.map(option => (
                    <option key={option.codigo} value={option.codigo}>{option.nombre}</option>
                ))}
            </select>
        </Fragment>
    );
    //retornar state, interfaz y fn qe modifica el state
        return [state, Seleccionar];
}

export default useMoneda;