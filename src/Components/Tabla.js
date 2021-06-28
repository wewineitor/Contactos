import React, {useEffect} from 'react'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

const Tabla = ({contacto, setContacto}) => {
    const getContactos = async() => {
        const url = await fetch('http://localhost:4000/contactos');
        const response = await url.json();

        setContacto(response);
    }

    useEffect(() => {
        getContactos();
    }, []);

    const deleteContacto = async(nombre, numero) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"Nombre": nombre, "Numero": numero})
        };

        await fetch('http://localhost:4000/contactos', requestOptions);
        getContactos()
        Swal.fire({
            title: 'Contacto eliminado',
            icon: 'success',
            confirmButtonText: 'ACEPTAR'
        })
    }

    return(
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Numero</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacto.map(cont => <tr key = {cont._id} className = 'table-warning'>
                            <td>{cont.Nombre}</td>
                            <td>{cont.Numero}</td>
                            <td>
                                <Link to = {`/actualizar/${cont.Nombre}/${cont.Numero}/${cont._id}`} className = "btn btn-info" >Actualizar</Link>
                                <button className = "btn btn-danger" onClick = {() => deleteContacto(cont.Nombre, cont.Numero)}>Eliminar</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            
        </>
    )
}

export default Tabla;