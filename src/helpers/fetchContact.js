import Swal from 'sweetalert2'
import getContactos from './getContactos';

const fetchContact = async(method, navigate, setContacto, nombre, numero, id) => {

    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "Nombre": nombre, "Numero": numero })
    };

    const title = {
        'POST': 'Contacto agregado correctamente',
        'PUT': 'Contacto actualizado',
        'DELETE': 'Contacto eliminado'
    }

    const url = method.toUpperCase() === 'PUT' ? `http://localhost:4000/contactos/${id}` : `http://localhost:4000/contactos`

    await fetch(url, requestOptions);
    if (method.toUpperCase() === 'POST' || method.toUpperCase() === 'DELETE') getContactos(setContacto)
    Swal.fire({
        title: title[method.toUpperCase()],
        icon: 'success',
        confirmButtonText: 'ACEPTAR'
    })
    .then((result) => {
        if (result.isConfirmed && method.toUpperCase() === 'PUT') 
            navigate('/')
    })
}

export default fetchContact