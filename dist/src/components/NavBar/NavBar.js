import React from 'react';
import '../../commonstyle/commonstyle.css';
import './NavBar.css';
export const NavBar = ({ width, bg, color, style, children }) => {
    const navBarStyles = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };
    return (React.createElement("div", { className: `NavBarContainer-top`, style: navBarStyles, "data-testid": "navbarComponent" }, children));
};
//# sourceMappingURL=NavBar.js.map