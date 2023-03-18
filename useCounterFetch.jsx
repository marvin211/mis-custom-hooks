import { useState } from "react"

export const useCounterFetch = (initialState = 1 ) => {
    const [counter, setCounter] = useState(initialState);

    const increment = () =>{//Funcion para incrementar el contador
        setCounter( counter + 1); 
    }

    return { 
        counter,
        increment
    }
}