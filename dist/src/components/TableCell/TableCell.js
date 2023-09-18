import React from 'react';
import './TableCell.css';
import '../../commonstyle/commonstyle.css';
export const TableCell = ({ children, className }) => {
    return React.createElement("td", { className: className ? className : 'tableCell' }, children);
};
//# sourceMappingURL=TableCell.js.map