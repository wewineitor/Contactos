import { useState } from 'react'
import useContact from '../../../hooks/useContact';
import Input from '../../inputs/Input';
import Table from '../../table/Table';

const HomeScreen = () => {
    const [contacto, setContacto] = useState([]);
    const { submit, nombre, numero, changeValueNombre, changeValueNumero } = useContact(setContacto, '', 'post', '')
    return (
        <div className='app container'>
            <div className='jumbotron'>
                <form onSubmit={submit}>
                    <div className='row' >
                        <Input
                            value={nombre}
                            changeValue={changeValueNombre}
                            placeholder='Nombre del contacto'
                        />

                        <Input
                            value={numero}
                            changeValue={changeValueNumero}
                            placeholder='Numero del contacto'
                        />

                        <div className='form-group col-md-3'>
                            <input className='btn btn-lg btn-info' type='submit' value='Agregar' />
                        </div>
                    </div>
                </form>
                <Table contacto={contacto} setContacto={setContacto} />
            </div>
        </div>
    )
}

export default HomeScreen