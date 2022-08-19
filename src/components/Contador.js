import React, { Component, useState } from "react"


function Contador(){
    const [numero, setNumero] = useState(0);
    return(
        <div>
            <h1>La cuenta esta en:</h1>
            <h1>{numero}</h1>
            <ul className="botones">
                <li className="bot"><button onClick={()=> setNumero(numero+1)}><h1>+</h1></button></li>
                <li className="bot"><button onClick={()=> setNumero(numero-1)}><h1>-</h1></button></li>
                <li className="bot"><button onClick={()=> setNumero(0)}><h3>Reset</h3></button></li>
            </ul>
        </div>
    )
}


export default Contador