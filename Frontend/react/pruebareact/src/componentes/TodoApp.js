import React from 'react';
import { Datacontext } from './DataContext';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    static contextType = Datacontext
    handleClick(event) {

        //limpiar localStorage
        //localStorage.clear();
        //eliminar un item localStorage
        //localStorage.removeItem("text");
        //obtener datos del localStorage
        const text = localStorage.getItem("text");
        console.log(text);

        if (this.state.text.length === 0)
            return;

        let newItem = {
            id: Date.now(),
            text: this.state.text
        };

        //console.log(newItem);

        this.setState((state) => ({
            //ES6
            //[...state.items, newItem]
            items: state.items.concat(newItem),
            text: ""
        }));

        console.log(this.state.items);

    }

    handleChange(event) {
        //console.log(event.target.value);
        //esto no se hace
        //this.state.text = event.target.value;
        this.setState(() => (
            {
                text: event.target.value
            }
        ));

        //Guardar localStorage
        localStorage.setItem("text", event.target.value);
        console.log(event.target.value);
    }

    handleChangeSelect(event) {
        console.log(event.target.value);
    }

    render() {

        const { user, setUser } = this.context;
        const frutas = [
            { id: 1, nombre: "Manzana" },
            { id: 2, nombre: "Pera" },
            { id: 3, nombre: "Uvas" }
        ];

        return (
            <>
                <h3>Tareas pendientes</h3>
                <pre> usuario {JSON.stringify(user, null, 2)} </pre>

                <ul>
                    {
                        this.state.items.map(item => (
                            <li key={item.id}>{item.text}</li>
                        ))
                    }

                </ul>
                <label> ¿Qué tengo que hacer? </label>
                <textarea type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Añadir #{this.state.items.length + 1} </button>
                <button onClick={() => {
                    setUser({
                        nombre: "modificado",
                        apellido: "desde TodoApp"
                    });
                }}>cambir datos globales</button>

                <select onChange={this.handleChangeSelect}>
                    <option value="">Selecciona una opción</option>
                    {
                        frutas.map((fruta) => {
                            return <option key={fruta.id} value={fruta.id} >{fruta.nombre}</option>
                        })
                    }
                </select>
            </>
        )
    }
}

export default TodoApp;
