const getContactos = async setContacto => {
    const url = await fetch('http://localhost:4000/contactos');
    const response = await url.json();

    setContacto(response);
}

export default getContactos