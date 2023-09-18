import React, { useState } from 'react';
import '../../commonstyle/commonstyle.css';
import './Tooltip.css';
export const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };
    return (React.createElement("div", { className: "tooltipMainDiv", "data-testid": "tooltipHover", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        children,
        showTooltip && React.createElement("span", { className: "textContainer " }, text)));
};
//# sourceMappingURL=Tooltip.js.map