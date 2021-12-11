
import { useState, useEffect, useContext } from "react";
import { Datacontext } from "./DataContext";

const FunctionTimer = (props) => {

    const [time, setTime] = useState(new Date());
    const {user} = useContext(Datacontext);

    useEffect(() => {

        console.log("useEffect");
        const interval = setInterval(() => {
            console.log("segundo");
            setTime(new Date());
        }, 1000);

        return () => {
            console.log("Desmontado FunctionTimer");
            clearInterval(interval);
        }

    }, [] /* no observa el cambio de ninguna variable */);

    return (
        <>
            <h1>Componente de funcion </h1>
            <pre>usuario {JSON.stringify(user, null, 2)}</pre>
            <h2> son las {time.toLocaleTimeString()}</h2>
        </>
    )
}

export default FunctionTimer;