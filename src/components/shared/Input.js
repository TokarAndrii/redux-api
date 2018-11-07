import React from 'react'

const Input = ({name, type, onChange, value}) => {
    return (
        <div>
            <label htmlFor={name}>{name}</label><input value={value} type={type} name={name} onChange={onChange}/>
        </div>

    )
}

export default Input