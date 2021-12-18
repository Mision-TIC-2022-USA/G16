import React from "react";
import { Datacontext } from "./DataContext";
import "./HelloMessage.css"
import { Spinner } from "react-bootstrap";
import { getPersonas, deletePersona } from "../servicios/PersonasService";
import { Link } from "react-router-dom";
class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personas: [],
            loading: true
        };
    }
    static contextType = Datacontext;
    //Montaje
    componentDidMount() {
        console.log("HelloMessage.componentDidMount");
        getPersonas().then(personas => {
            this.setState(() => ({
                personas: personas.data,
                loading: false
            }));
            console.log("personas", personas.data);
        });
    }

    //Actualizacion
    componentDidUpdate() {
        console.log("HelloMessage.componentDidUpdate");
    }

    //Desmontaje
    componentWillUnmount() {
        console.log("HelloMessage.componentWillUnmount");
    }

    //edit personas
    handleEditar = (event, id) => {
        event.preventDefault();
        console.log("handleEditar", id);
    }

    //delete personas
    handleEliminar = (event, id) => {

        console.log("handleEliminar", id);
        deletePersona(id).then(personas => {
            this.setState((state) => ({
                personas: state.personas.filter(persona => persona.id !== id)
            }));
            console.log("personas", personas.data);
        }).catch(error => {
            console.log("error", error);
        });

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

        const { user } = this.context;
        console.log(user);

        return (
            <>
                <div className="titulo" >{getSaludo(user)} </div>
                {/* Table beautiful loading personas */}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.loading ?
                                (
                                    <tr>
                                        <td colSpan="5" className="text-center">
                                            <Spinner animation="grow" />
                                        </td>
                                    </tr>
                                ) :
                                (this.state.personas.map(persona => (
                                    <tr key={persona.id}>
                                        <td>{persona.id}</td>
                                        <td>{persona.nombre}</td>
                                        <td>{persona.edad}</td>
                                        <td>{persona.correo}</td>
                                        <td>
                                            <Link to={"/persona/create/" + persona.id} className="btn btn-primary m-1">Editar</Link>
                                            <button onClick={(event, id) => this.handleEliminar(event, persona.id)} className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                )))}
                    </tbody>
                </table>
                <Link to="/persona/create/0" className="btn btn-secondary">Crear Persona</Link>
            </>
        )
    }
}

export default HelloMessage;