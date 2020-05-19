import React from 'react'
import './Legenda.css'


/*
<Legenda htmlFor="email">Email: </legenda>  'htmlForm' para diferenciar de um looping

const props = {
    htmlFor: 'email',
    children: 'Email:',
}

react so coloca no props o conteudo da tag
*/

function Legenda(props) {
    return (
        <label className="legenda" htmlFor={props.htmlFor}>
            {props.children}
        </label>
    )
}

export default Legenda