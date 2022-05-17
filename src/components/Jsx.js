import React, {Fragment} from 'react';

const Jsx = () => {

    const constante = 'Soy una constante'
    const temperatura = 21;

    return (
        <Fragment>
            <h2>Hola JSX {constante} </h2>
            <h4>
                Hace {
                    temperatura > 20 ? 'calor' : 'frio'
                }
            </h4>
        </Fragment>
        
    );
}
 
export default Jsx;