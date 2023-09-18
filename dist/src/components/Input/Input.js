import React, { useState } from 'react';
import { ShowPassword } from '../../assets/ShowPassword';
import { ClosePassword } from '../../assets/ClosePassword';
import '../../commonstyle/commonstyle.css';
import './Input.css';
export const Input = (props) => {
    const { className, placeholder, autoFocus = false, disabled = false, type, adornment, required, onChange, ornament, error = false, ...rest } = props;
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
    const inputClassName = `inputField ${className} ${type === 'password' ? 'password' : ''}`;
    let _placeholder = 'Input Field';
    let _type = 'text';
    let _required = false;
    if (placeholder)
        _placeholder = placeholder;
    if (type)
        _type = type;
    if (required)
        _required = required;
    return (React.createElement(React.Fragment, null,
        type === 'password' && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `${className}${error ? 'error' : ''} commonInputDiv combinedInputField ` },
                React.createElement("input", { ...rest, type: inputType, placeholder: _placeholder, autoFocus: autoFocus, disabled: disabled, required: _required, onChange: onChange, "data-testid": "passwordInput" }),
                React.createElement("span", { className: "passwordIcon", onClick: togglePasswordVisibility, "data-testid": "passwordVisibility" }, showPassword ? React.createElement(ClosePassword, null) : React.createElement(ShowPassword, null))))),
        type !== 'password' && !adornment && !ornament && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `${className} ${error ? 'error' : ''} commonInputDiv` },
                React.createElement("input", { type: _type, placeholder: _placeholder, autoFocus: autoFocus, disabled: disabled, required: _required, ...rest, onChange: onChange, "data-testid": "generalInput" })))),
        type !== 'password' && adornment && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `${className} ${error ? 'error' : ''} combinedInputField` },
                React.createElement("div", { className: "adornmentContent" },
                    React.createElement("span", { className: "InputAddOn-item InputAddOn-field", "data-testid": "adornment" }, adornment)),
                React.createElement("div", { className: `adornInputField ${className}` },
                    React.createElement("input", { className: "InputAddOn-field", placeholder: _placeholder, ...rest, type: _type, autoFocus: autoFocus, disabled: disabled, required: _required, onChange: onChange, "data-testid": "adornmentInput" }))))),
        type !== 'password' && ornament && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `${className} ${error ? 'error' : ''}  combinedInputField` },
                React.createElement("div", { className: `oranInputField ${className}` },
                    React.createElement("input", { className: "InputAddOn-field", placeholder: _placeholder, ...rest, type: _type, autoFocus: autoFocus, disabled: disabled, required: _required, onChange: onChange, "data-testid": "oranmentInput" })),
                React.createElement("div", { className: "oranmentContent" },
                    React.createElement("span", { className: "InputAddOn-item", "data-testid": "oranment" }, ornament)))))));
};
//# sourceMappingURL=Input.js.map