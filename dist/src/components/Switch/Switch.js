import React from 'react';
import './Switch.css';
export const Switch = (props) => {
    const { name, disabled, checked = false, onChange } = props;
    return (React.createElement("div", { className: "switch" },
        React.createElement("input", { type: "checkbox", id: "switch-toggle", defaultChecked: checked, onChange: onChange, disabled: disabled, name: name, ...props }),
        React.createElement("label", { htmlFor: "switch-toggle" },
            React.createElement("p", { className: checked ? 'switchleftTag' : 'switchrightTag' }, checked ? 'On' : 'Off'))));
};
//# sourceMappingURL=Switch.js.map