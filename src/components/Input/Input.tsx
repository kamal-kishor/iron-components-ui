import React, { useState } from 'react';
import { InputProps } from '../../interfaces/CommonInterface';
import { ShowPassword } from '../../assets/ShowPassword';
import { ClosePassword } from '../../assets/ClosePassword';
import classnames from 'classnames';
import '../../commonstyle/commonstyle.css';
import './Input.css';

export const Input: React.FunctionComponent<InputProps> = (props) => {
    const { className, placeholder, autoFocus = false, disabled = false, type, adornment, required, onChange, ornament, error = false, ...rest } = props;
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

    const classNameStyles = classnames(className, {
        commonInputDiv: adornment || ornament,
        error: error
    });

    return (
        <>
            {type === 'password' && (
                <div className={`${classNameStyles} combinedInputField`}>
                    <input {...rest} type={inputType} placeholder={_placeholder} autoFocus={autoFocus} disabled={disabled} required={_required} onChange={onChange} data-testid="passwordInput" />
                    <span className="passwordIcon" onClick={togglePasswordVisibility} data-testid="passwordVisibility">
                        {showPassword ? <ClosePassword /> : <ShowPassword />}
                    </span>
                </div>
            )}
            {type !== 'password' && !adornment && !ornament && (
                <div className={classNameStyles}>
                    <input type={_type} placeholder={_placeholder} autoFocus={autoFocus} disabled={disabled} required={_required} {...rest} onChange={onChange} data-testid="generalInput" />
                </div>
            )}
            {type !== 'password' && adornment && (
                <div className={`${classNameStyles} combinedInputField`}>
                    <div className="adornmentContent">
                        <span className="InputAddOn-item InputAddOn-field" data-testid="adornment">
                            {adornment}
                        </span>
                    </div>
                    <div className="adornInputField">
                        <input
                            className="InputAddOn-field"
                            placeholder={_placeholder}
                            {...rest}
                            type={_type}
                            autoFocus={autoFocus}
                            disabled={disabled}
                            required={_required}
                            onChange={onChange}
                            data-testid="adornmentInput"
                        />
                    </div>
                </div>
            )}
            {type !== 'password' && ornament && (
                <div className={`${classNameStyles} combinedInputField`}>
                    <div className="oranInputField">
                        <input
                            className="InputAddOn-field"
                            placeholder={_placeholder}
                            {...rest}
                            type={_type}
                            autoFocus={autoFocus}
                            disabled={disabled}
                            required={_required}
                            onChange={onChange}
                            data-testid="oranmentInput"
                        />
                    </div>
                    <div className="oranmentContent">
                        <span className="InputAddOn-item" data-testid="oranment">
                            {ornament}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};
