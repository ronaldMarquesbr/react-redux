import React from 'react';
import {useSelector} from 'react-redux';


function Cabecalho(props){

    const contador = useSelector((state) => { return state.counter })

    return(

        <div className='cabecalho d-flex justify-content-between align-items-center px-3'>

            <h2>Contador</h2>

            <h2>{contador}</h2>

        </div>

    )


}

export default Cabecalho
