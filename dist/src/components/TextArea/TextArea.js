import React from 'react';
import '../../commonstyle/commonstyle.css';
import './TextArea.css';
export const TextArea = (props) => {
    const { placeholder, onChange, rows, cols, className, error = false, ...rest } = props;
    return (React.createElement("textarea", { className: `${error ? 'error' : ''} ${className ? className : 'textAreaInput'}`, rows: rows ? rows : 10, cols: cols ? cols : 50, form: props.form, placeholder: placeholder ? placeholder : 'Text Area...', onChange: onChange }));
};
//# sourceMappingURL=TextArea.js.map