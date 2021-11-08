import React ,{useState} from 'react';
import PropTypes from "prop-types";


const CounterApp = ({ value }) => {

const [counter, setCounter] = useState(value);

const handleReset=()=>{
    setCounter(value)
}
const handleApp=()=>{
    setCounter(counter+1)
}
    
const handleRest=()=>{
    setCounter(counter-1)
}

    return (
        <>
            <h1>Prueba...</h1>
            <h1>{counter}</h1>
            <button onClick={handleRest}> -1 </button>  
            <button onClick={handleReset}> Reset </button>
             <button onClick={handleApp}> +1 </button>
            
        </>
    )
}

CounterApp.propType = {
    value: PropTypes.number.isRequired
};

export default CounterApp;
