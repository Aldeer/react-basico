import {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3]);
    const [numero, setNumero] = useState(4);
    const agregarElemento = () => {
        console.log('click');
        setNumero(numero + 1);
        setArrayNumero([
            ...arrayNumero,
            numero
        ]);
    }

    return (
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            <ul>
                {
                    arrayNumero.map((item, index) => 
                        <li key={index}>Item: {item} - Index: {index}</li>
                    )
                }
            </ul>
            
        </Fragment>
    );
}
 
export default Lista;