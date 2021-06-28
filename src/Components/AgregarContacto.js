import React, {useState} from 'react';
import Swal from 'sweetalert2'

const AgregarContacto = ({setContacto}) => {

    const [nombre, setNombre] = useState([]);
    const [numero, setNumero] = useState([]);

    const getContactos = async() => {
        const url = await fetch('http://localhost:4000/contactos');
        const response = await url.json();

        setContacto(response);
    }

    const submit = async(e) => {
        e.preventDefault();
        const requestOptions = {
            
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"Nombre": nombre, "Numero": numero})
        };

        await fetch('http://localhost:4000/contactos', requestOptions);

        getContactos();

        Swal.fire({
            title: 'Contacto agregado correctamente',
            icon: 'success',
            confirmButtonText: 'ACEPTAR'
        })

        setNombre('');
        setNumero('')
    }

    const changeValueNombre = e => {
        setNombre(e.target.value);
    }

    const changeValueNumero = e => {
        setNumero(e.target.value);
    }

    return (
        
        <form onSubmit = {submit}>
            <div className = 'row' >
                <div className = 'form-group col-md-3'>
                    <input 
                    className = 'form-control form-control-lg' 
                    type = 'text' 
                    placeholder = 'Nombre del contacto'
                    value = {nombre}
                    onChange = {changeValueNombre}
                    />
                </div>

                <div className = 'form-group col-md-3'>
                    <input 
                    className = 'form-control form-control-lg' 
                    type = 'text' 
                    placeholder = 'Numero del contacto'
                    value = {numero}
                    onChange = {changeValueNumero}
                    />
                </div>

                <div className = 'form-group col-md-3'>
                    <input className = 'btn btn-lg btn-info' type = 'submit' value = 'Agregar'/>
                </div>
                
            </div>
            
        </form>
    );
}

export default AgregarContacto;