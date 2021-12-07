import React from "react";
import "./HelloMessage.css"
class HelloMessage extends React.Component {

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
            if(user)
               return <h1>Hola {formatNombre(user)}</h1>
        
            return <h2>Hola desconocido</h2>
        }

        return (
            <>
                <div className="titulo" >{ getSaludo(this.props.user) } </div>
            </>
        )
    }
}

export default HelloMessage;