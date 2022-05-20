import {useState, Fragment} from 'react';

const Contador = () => {
    
    const [contador, setContador] = useState(0);
    const aumentar = () => {
        console.log('me diste un click');
        setContador(contador+1);
    }


    return (
        <Fragment>
            <h3>
            Esto es un contador: {contador}
            </h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>  
    );
}

export default Contador;