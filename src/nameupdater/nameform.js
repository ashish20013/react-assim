import './nameform.css'
import { Fragment, useState } from 'react'

export default function NameUpdater() {

    const [name, setName] = useState("****")
    

    function handleClick() {
        
let name = document.getElementById("input")
setName(name.value)
name.value = ''
    }

    return (
        <Fragment>
            {/* <h1>{name}</h1> */}
            <input placeholder='add your name...' id="input"></input>
            <button onClick={handleClick} className="btn">Submit</button>
            <p>Hii my name is {name}</p>

        </Fragment>
    )
}
