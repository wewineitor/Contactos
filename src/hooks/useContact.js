import {useState} from 'react';
import fetchContact from '../helpers/fetchContact';

const useContact = (setContacto, navigate, method, id) => {
    const [nombre, setNombre] = useState([]);
    const [numero, setNumero] = useState([]);

    const submit = async(e) => {
        e.preventDefault();

        
        method === 'post' ? fetchContact('post', '', setContacto, nombre, numero, '') : fetchContact('put', navigate, setContacto, nombre, numero, id)
        setNombre('');
        setNumero('')
    }

    const changeValueNombre = e => {
        setNombre(e.target.value);
    }

    const changeValueNumero = e => {
        setNumero(e.target.value);
    }

    return {
        submit,
        nombre,
        numero,
        changeValueNombre, 
        changeValueNumero
    }
}

export default useContact