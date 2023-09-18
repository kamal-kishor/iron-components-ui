import React from 'react';
import '../../commonstyle/commonstyle.css';
import './MenuItem.css';
export const MenuItem = ({ autofocus = false, children = 'Menu Item', className, disableGutters = false, onClick, value = children }) => {
    const handleClick = () => {
        onClick(value);
    };
    return (React.createElement("span", { className: `${className ? className : 'menuItem-label'} ${autofocus ? 'selected' : 'notSelected'} ${disableGutters ? 'removeGutters' : 'addGutters'}`, onClick: handleClick, key: value }, children));
};
//# sourceMappingURL=MenuItem.js.map