import {Link, useNavigate} from 'react-router-dom'
import fetchContact from "../../helpers/fetchContact"

const TableItems = ({_id, Nombre, Numero, setContacto}) => {
    const navigate = useNavigate()

    return (
        <tr className='table-warning'>
            <td>{Nombre}</td>
            <td>{Numero}</td>
            <td>
                <Link to={`/actualizar/${_id}`} className="btn btn-info" >Actualizar</Link>
                <button className="btn btn-danger" onClick={() => fetchContact('delete', navigate, setContacto, Nombre, Numero)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default TableItems