import {useState, Fragment} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    });
    const ingresoManual = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        });
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(datos.nombre + " " + datos.apellido)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={enviarDatos}>
                <div>
                    <input 
                        placeholder='Ingrese Nombre'
                        type='text'
                        name='nombre'
                        onChange={ingresoManual}
                    />
                </div>
                <div>
                    <input 
                        placeholder='Ingrese Apellido'
                        type='text'
                        name='apellido'
                        onChange={ingresoManual}
                    />
                </div>
                <div>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
            <h3>{datos.apellido}, {datos.nombre}</h3>
        </Fragment>
    );
}
 
export default Formulario;