import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setNumero] = useState([]);
    const [contador, setContador] = useState(0);
    const agregarElemento = () => {
        setContador(contador + 1)
        setNumero([...arrayNumero, contador])
    }

    return (
        <Fragment>
            <h1>Soy una Lista</h1>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item, index) =>
                    <p key={index}> {item} - {index} </p>
                )
            }
        </Fragment>
    );
}
 
export default Lista;