import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2'
import { useParams, useHistory } from 'react-router-dom';


const Actualizar = () => {
    const [nombre, setNombre] = useState([]);
    const [numero, setNumero] = useState([]);

    let { id, Nombre, Numero } = useParams();
    let history = useHistory();

    useEffect(() => {
        setNombre(Nombre);
        setNumero(Numero);
    }, [])

    const submit = async(e) => {
        
        e.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"Nombre": nombre, "Numero": numero})
        };

        await fetch(`http://localhost:4000/contactos/${id}`, requestOptions);
        Swal.fire({
            title: 'Contacto actualizado',
            icon: 'success',
            confirmButtonText: 'ACEPTAR'
        }).then((result) => {
            if(result.isConfirmed) {
                history.push('/inicio')
            }
        });
    }

    const changeValueNombre = e => {
        setNombre(e.target.value);
    }

    const changeValueNumero = e => {
        setNumero(e.target.value);
    }

    return (
        <form onSubmit = {submit}>
            <div className="form-group">
                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    id = 'nombre' 
                    className="form-control" 
                    placeholder="Nombre"
                    value = {nombre}
                    onChange = {changeValueNombre}
                    />
                    <label htmlFor="nombre">Nombre</label>
                </div>

                <div className="form-floating">
                    <input 
                    type="text" 
                    className="form-control" 
                    id = 'numero' 
                    placeholder="Numero"
                    value = {numero}
                    onChange = {changeValueNumero}
                    />
                    <label htmlFor="numero">Numero</label>
                </div>
                <br/>
                <div className="d-grid gap-2">
                    <input className="btn btn-info" type = 'submit' value = 'ACTUALIZAR'/>
                </div>
            </div>

        </form>
    );
}

export default Actualizar;