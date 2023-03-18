import { useState } from "react"

//Creando un custom hook para manejar los formularios
export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState); 
    
    const resetValues = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => { 

        setValues({
            ...values, 
            [target.name]: target.value 
        });
    }

    return [values, handleInputChange, resetValues]; 
}
