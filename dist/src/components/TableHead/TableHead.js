import React from 'react';
import './TableHead.css';
import '../../commonstyle/commonstyle.css';
export const TableHead = ({ children, className }) => {
    return React.createElement("th", { className: className ? className : 'tableHead' }, children);
};
//# sourceMappingURL=TableHead.js.map