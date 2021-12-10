import React from 'react';

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
        localStorage.setItem("text",event.target.value);
        console.log(event.target.value);
    }

    render() {
        return (
            <>
                <h3>Tareas pendientes</h3>

                <ul>
                    {
                        this.state.items.map(item => (
                            <li key={item.id}>{item.text}</li>
                        ))
                    }
                </ul>
                <label> ¿Qué tengo que hacer? </label>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Añadir #{this.state.items.length + 1} </button>
            </>
        )
    }
}

export default TodoApp;
