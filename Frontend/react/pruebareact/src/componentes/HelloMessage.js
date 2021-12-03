import React from "react";

class HelloMessage extends React.Component {
    render() {
        return (
            <>
                <h1>Hello Message {this.props.nombre}</h1>
            </>
        )
    }
}

export default HelloMessage;