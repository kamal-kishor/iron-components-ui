import React from 'react';
import '../../commonstyle/commonstyle.css';
import './Drawer.css';
export const Drawer = ({ align = 'left', width, bg, color, className, style, isOpen = true, children }) => {
    const DrawerStyles = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };
    return (React.createElement(React.Fragment, null, isOpen && (React.createElement("div", { className: className ? className : `DrawerContainer DrawerContainer-${align}`, "data-testid": "drawerComoponent", style: DrawerStyles }, children))));
};
//# sourceMappingURL=Drawer.js.map