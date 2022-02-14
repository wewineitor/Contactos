import Swal from 'sweetalert2'
import getContactos from './getContactos';

const deleteContact = async(nombre, numero, setContacto) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"Nombre": nombre, "Numero": numero})
    };

    await fetch('http://localhost:4000/contactos', requestOptions);
    getContactos(setContacto)
    Swal.fire({
        title: 'Contacto eliminado',
        icon: 'success',
        confirmButtonText: 'ACEPTAR'
    })
}

export default deleteContact