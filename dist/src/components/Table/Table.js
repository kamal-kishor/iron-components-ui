import React from 'react';
import './Table.css';
import '../../commonstyle/commonstyle.css';
export const Table = ({ children, className }) => {
    return (React.createElement("div", { className: className ? className : 'table-container', "data-testid": "table-container" },
        React.createElement("table", { className: "mainTable" }, children)));
};
//# sourceMappingURL=Table.js.map