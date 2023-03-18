import { useState, useEffect, useRef} from 'react';

//Custom hook to fetch data from API
export const useFetch = (url) => { //Recibe la url de la API
    
    const [state, setState] = useState({
        data: null,  //La data que va a traer la API
        loading: true, //Cuando se este cargando la data
        error: null //Cuando se presente un error
    });

    const isMounted = useRef(true); //Se crea un ref para saber si el componente esta montado.

    useEffect(() => {

        return () => { //Cuando el componente se desmonta
            isMounted.current = false; 
        }

    }, []); //Que se dispara cuando el componente se carga por primera vez



    useEffect(() => { 

        //Apenas empieza hacer la peticion se va a actualizar el estado nuevamente con el loading en true y el error en null y la data en null
        setState({data: null, loading: true, error: null}); 

        //Ejecutar el fetch a la url que se le pase como argumento 
        fetch(url) 
            .then( response => response.json()) 
            .then( data => { 
      
                // if(isMounted.current){ //Si el componente esta montado y puedo llamar seguramente el setState

                    setState({ 
                        loading: false, //Ya no esta cargando
                        error: null, //No hay error
                        data //Se le asigna la data que se recibio
                    });

                // } else {
                //     console.log('setState no se llamo');
                // }
               
            })
    
    }, [url]); //Se dispara cuando la url cambie
    

    return state; 
    
}
