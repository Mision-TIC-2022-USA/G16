import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createPersona, getPersona, updatePersona } from '../servicios/PersonasService'
import { useEffect } from 'react'

const CreatePersona = () => {


    const [id, setId] = useState(0)
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate();
    const { idpersona } = useParams();
    useEffect(() => {

        if (idpersona === '0')
            return;
        getPersona(idpersona).then(persona => {
            const per = persona.data;
            setId(per.id)
            setNombre(per.nombre)
            setEdad(per.edad)
            setCorreo(per.correo)
            console.log("persona", per)
        })

    }, [idpersona])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (idpersona === '0') {
            createPersona({ id, nombre, edad, correo }).then(persona => {
                navigate('/HelloMessage')
                console.log("persona", persona.data);
            }).catch(error => {
                console.log("error", error);
            })
            return;
        }
        updatePersona({ id, nombre, edad, correo }).then(persona => {
            navigate('/HelloMessage')
            console.log("persona", persona.data);
        }).catch(error => {
            console.log("error", error);
        })

    }

    const handleId = (event) => {
        setId(event.target.value)
    }
    const handleNombre = (event) => {
        setNombre(event.target.value)
    }
    const handleEdad = (event) => {
        setEdad(event.target.value)
    }
    const handleCorreo = (event) => {
       
        //validation email pattern
      
       // console.log("handleCorreo", event.target.value)
        setCorreo(event.target.value)
    }

    return (
        <>
            <h1>Persona</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>id</label>
                                <input value={id} onChange={handleId} type="number" className="form-control" placeholder="Nombre" />
                                <label>Nombre</label>
                                <input value={nombre} onChange={handleNombre} type="text" className="form-control" placeholder="Nombre" />
                                <label>Edad</label>
                                <input value={edad} onChange={handleEdad} type="number" className="form-control" placeholder="Edad" />
                                <label>Email</label>
                                <input value={correo} onChange={handleCorreo} type="text" className="form-control" placeholder="Email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link replace to="/HelloMessage" className="btn btn-secondary">Volver</Link>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CreatePersona
