import React from 'react'

const Button = ({text, onClick, type, className})=> {
    return(
        <button className={className} onClick={onClick} type={type}>{text}</button>
    )
}

export default Button