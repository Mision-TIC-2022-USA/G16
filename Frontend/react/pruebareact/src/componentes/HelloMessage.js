import React from "react";
import { Datacontext } from "./DataContext";
import "./HelloMessage.css"
class HelloMessage extends React.Component {

    static contextType = Datacontext;
    //Montaje
    componentDidMount() {
        console.log("HelloMessage.componentDidMount");
    }

    //Actualizacion
    componentDidUpdate() {
        console.log("HelloMessage.componentDidUpdate");
    }

    //Desmontaje
    componentWillUnmount() {
        console.log("HelloMessage.componentWillUnmount");
    }

    render() {
        function formatNombre(user) {
            return user.nombre + " " + user.apellido
        }

        function getSaludo(user) {
            if (user)
                return <h1>Hola {formatNombre(user)}</h1>

            return <h2>Hola desconocido</h2>
        }

        const {user} = this.context;
        console.log(user);

        return (
            <>
                <div className="titulo" >{getSaludo(user)} </div>
            </>
        )
    }
}

export default HelloMessage;