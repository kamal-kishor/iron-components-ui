import React from 'react';
import './TableRow.css';
import '../../commonstyle/commonstyle.css';
export const TableRow = ({ children, className }) => {
    return React.createElement("tr", { className: className ? className : 'tableRow' }, children);
};
//# sourceMappingURL=TableRow.js.map