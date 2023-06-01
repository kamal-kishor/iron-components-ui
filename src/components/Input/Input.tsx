import React, { useState } from 'react';
import { InputProps } from '../../interfaces/CommonInterface';
import { ShowPassword } from '../../assets/ShowPassword';
import { ClosePassword } from '../../assets/ClosePassword';
import '../../commonstyle/commonstyle.css';
import './Input.css';

export const Input: React.FunctionComponent<InputProps> = (props) => {
    const { className = 'inputArea', placeholder, autoFocus = false, disabled = false, type, adornment, required, onChange, ornament, error = false, ...rest } = props;
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    let _placeholder: string = 'Input Field';
    let _type: string = 'text';
    let _required: boolean = false;
    if (placeholder) _placeholder = placeholder;
    if (type) _type = type;
    if (required) _required = required;

    return (
        <>
            <div className={`${error ? 'error' : ''} ${className || ''} commonInputDiv`}>
                <input type={_type} placeholder={_placeholder} autoFocus={autoFocus} disabled={disabled} required={_required} {...rest} onChange={onChange} data-testid="generalInput" />
            </div>
        </>
    );
};
