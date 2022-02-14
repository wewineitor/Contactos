
import { useEffect } from "react";
import getContactos from "../../helpers/getContactos";
import TableItems from "./TableItems";

export const Table = ({contacto, setContacto}) => {
    useEffect(() => {
        getContactos(setContacto);
    }, [setContacto]);

    return (
        contacto.length !== 0 ? <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Numero</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    contacto.map(cont => <TableItems key={cont._id} {...cont} setContacto = {setContacto}/>)
                }
            </tbody>
        </table> 
        : <h2>No hay contactos</h2>

    )
}

export default Table
