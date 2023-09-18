import React from 'react';
import '../../commonstyle/commonstyle.css';
import './Avatar.css';
export const Avatar = ({ name = 'K', src, alt = 'avatar', size = 50, className, onClick }) => {
    const getInitials = (name) => {
        const initials = name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase())
            .join('');
        return initials;
    };
    return (React.createElement("div", { className: className ? className : `avatarContainer `, onClick: onClick, "data-testid": "avatar-container" }, src ? React.createElement("img", { className: "avatarImage", src: src, alt: alt }) : React.createElement("span", { className: "avatarInitials" }, getInitials(name))));
};
//# sourceMappingURL=Avatar.js.map