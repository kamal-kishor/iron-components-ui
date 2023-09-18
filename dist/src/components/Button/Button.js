import React from 'react';
import '../../commonstyle/commonstyle.css';
import './Button.css';
export const Button = (props) => {
    const { bg, color, variant = 'borderLess', onClick, disabled = false, className, type = 'button', multiple = false, startIcon, endIcon, children } = props;
    return (React.createElement(React.Fragment, null,
        (type === 'button' || type === 'submit' || type === 'reset') && (React.createElement("button", { ...props, type: "button", className: `${className || ''} button button-${variant} ${disabled ? 'button_disabled' : ''} ${startIcon ? 'Icon' : ''} ${endIcon ? 'Icon' : ''}`, onClick: onClick, disabled: disabled },
            startIcon && React.createElement("span", { className: "start-button-icon" }, startIcon),
            children ? children : 'Button',
            endIcon && React.createElement("span", { className: "end-button-icon" }, endIcon))),
        type === 'file' && (React.createElement(React.Fragment, null,
            React.createElement("input", { className: "uploadFile", type: "file", hidden: true, multiple: multiple, id: "upload-btn" }),
            React.createElement("label", { className: `${className ? className : `button button-${variant}`} ${disabled ? `button_disabled` : ''}`, htmlFor: "upload-btn" }, children ? children : 'Upload Button')))));
};
//# sourceMappingURL=Button.js.map