import React from 'react';
import '../../commonstyle/commonstyle.css';
import './Badge.css';
export const Badge = ({ label, type = 'primary', className, max = 11 }) => {
    const displayLabel = label > max ? `${max}+` : label;
    return (React.createElement("span", { className: className ? className : `badge badge-${type}`, "data-testid": "tooltip" }, displayLabel));
};
//# sourceMappingURL=Badge.js.map