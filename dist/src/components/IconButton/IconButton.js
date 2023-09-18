import React from 'react';
import { Upload } from '../../assets/Upload';
import { DeleteIcon } from '../../assets/DeleteIcon';
import './IconButton.css';
export const IconButton = (props) => {
    const { children, className, multiple = false, onClick, type = 'button' } = props;
    return (React.createElement(React.Fragment, null,
        type === 'file' && (React.createElement(React.Fragment, null,
            React.createElement("input", { className: "IconButton-Input", type: "file", hidden: true, multiple: multiple, id: "IconButton-btn" }),
            React.createElement("label", { className: className ? className : 'IconButton-Label', htmlFor: "IconButton-btn", "data-testid": "upload-component" }, children ? React.createElement("span", { className: "image-icon" }, children) : React.createElement(Upload, null)))),
        type === 'button' && (React.createElement(React.Fragment, null,
            React.createElement("input", { className: "IconButton-Input", type: "button", hidden: true, multiple: multiple, id: "IconButton-btn" }),
            React.createElement("label", { className: className ? className : 'IconButton-Label', htmlFor: "IconButton-btn", "data-testid": "upload-component", onClick: onClick }, children ? React.createElement("span", { className: "image-icon" }, children) : React.createElement(DeleteIcon, null))))));
};
//# sourceMappingURL=IconButton.js.map