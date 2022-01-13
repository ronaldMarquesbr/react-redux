import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Contador(props){

    const contador = useSelector((state) => { return state });

    const dispatch = useDispatch();

    return(

        <div>

            <div>{contador}</div>
            <button className='btn btn-danger me-1' onClick={( )=>{ dispatch({type: 'DECREMENT'}) }}>-</button>
            <button className='btn btn-primary ms-1' onClick={()=>{ dispatch({type: 'INCREMENT'}) }}>+</button>

        </div>

    )

}

export default Contador