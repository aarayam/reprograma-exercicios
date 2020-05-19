import React from 'react'
import './Campo.css'

/*
<Campo id="senha" type="password" name="senha" placeholder="Senha"></Campo>

const props = {
    id='senha',
    type='password',
    name='senha',
    placeholder='Senha'
}
*/

function Campo(props) {
    return (
        <input
        id={props.id}
        className="campo"
        type={props.type}
        placeholder={props.placeholder}    
        />
    )
}

export default Campo