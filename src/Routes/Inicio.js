import React from 'react';
import AgregarContacto from '../Components/AgregarContacto';
import Tabla from '../Components/Tabla';

const Inicio = ({contacto, setContacto}) => {

  return (
    <>
        <AgregarContacto setContacto = {setContacto}/>
        <Tabla contacto = {contacto} setContacto = {setContacto}/>
    </>
  );
}

export default Inicio;
