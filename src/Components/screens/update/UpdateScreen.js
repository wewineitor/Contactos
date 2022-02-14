import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useContact from '../../../hooks/useContact';
import InputUpdate from '../../inputs/InputUpdate';

const UpdateScreen = () => {
    const [contacto, setContacto] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()
    const { submit, nombre, numero, changeValueNombre, changeValueNumero } = useContact(setContacto, navigate, 'put', id)
    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <InputUpdate
                    value={nombre}
                    changeValue={changeValueNombre}
                    placeholder='Nombre del contacto'
                />

                <InputUpdate
                    value={numero}
                    changeValue={changeValueNumero}
                    placeholder='Numero del contacto'
                />

                <br />
                <div className="d-grid gap-2">
                    <input className="btn btn-info" type='submit' value='ACTUALIZAR' />
                </div>
            </div>

        </form>
    )
}
export default UpdateScreen
