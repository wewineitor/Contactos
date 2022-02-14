import React from 'react'

const InputUpdate = ({ value, changeValue, placeholder }) => {
    return (
        <div className="form-floating mb-3">
            <input
                type="text"
                id={value}
                className="form-control"
                placeholder="Nombre"
                value={value}
                onChange={changeValue}
            />
            <label htmlFor={value}>{placeholder}</label>
        </div>
    )
}
export default InputUpdate