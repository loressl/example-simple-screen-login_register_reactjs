import React from 'react';
import './styles.scss';

function Input({error, placeholder, type, name, handleChange}){
    return(
        <div className="input-form">
            <input
            data-testid="input-form-field"
            className={error.length >0 ? "error" :null}
            placeholder={placeholder} 
            type={type}
            name={name}
            noValidate
            onChange={handleChange} 
            />
            {error.length > 0 && <span className="errorMessage">{error}</span>}
        </div>
    );
}

export default Input;