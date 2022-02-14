export const Input = ({ value, changeValue, placeholder }) => {
    return (
        <div className='form-group col-md-3'>
            <input
                className= 'form-control form-control-lg'
                type='text'
                placeholder={placeholder}
                value={value}
                id = {value}
                onChange={changeValue}
            />
        </div>

    )
}

export default Input