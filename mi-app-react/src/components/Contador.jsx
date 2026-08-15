import { useState } from "react";

export default function Contador(){
    const [count, setCount] = useState(0);

    const incrementar = () => setCount(count+1);
    const reiniciar = () => setCount(0);

    return(
        <div>
            <p>Clicks: {count}</p>
            <button onClick={incrementar}>Sumar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    );

}