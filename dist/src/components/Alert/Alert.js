import React, { useState } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import '../../commonstyle/commonstyle.css';
import './Alert.css';
export const Alert = ({ message, type = 'success', timeout, isClosable = true, className }) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };
    if (timeout) {
        setTimeout(() => {
            handleClose();
        }, timeout);
    }
    if (!isOpen) {
        return null;
    }
    const alertBody = (React.createElement("div", null,
        type === 'success' && 'This is the Success Alert',
        type === 'failure' && 'This is the Failure Alert',
        type === 'warning' && 'This is the Warning Alert'));
    return (React.createElement("div", { className: className ? className : `alert alert-${type}` },
        React.createElement("span", { className: "AlertSpan" }, message ? message : alertBody),
        isClosable && (React.createElement("div", { className: "closeIcon", "data-testid": "close-button", onClick: handleClose },
            React.createElement(CloseIcon, null)))));
};
//# sourceMappingURL=Alert.js.map