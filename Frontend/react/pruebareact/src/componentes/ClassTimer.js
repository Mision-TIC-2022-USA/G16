import React from "react";
import { Datacontext } from "./DataContext";

class ClassTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    static contextType = Datacontext;

    //Se monta el componente
    componentDidMount() {

        this.interval = setInterval(() => {
            this.setState(() => ({
                time: new Date()
            }));
            //   console.log("segundo");
        }, 1000);
    }

    //Componente Actualizado
    componentDidUpdate() {
        //console.log("Actualizado");
    }

    //Componente Desmontado
    componentWillUnmount() {
        console.log("Desmontado ClassTimer");
        clearInterval(this.interval);
    }

    render() {

        const {user} = this.context;
        return (
            <>
                <h1>Componente de Clase </h1>
                <pre> usuario {JSON.stringify(user, null, 2)} </pre>
                <h2> son las {this.state.time.toLocaleTimeString()}</h2>
            </>
        );
    }
}

export default ClassTimer;