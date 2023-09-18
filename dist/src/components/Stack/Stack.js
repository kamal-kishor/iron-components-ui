import React from 'react';
import '../../commonstyle/commonstyle.css';
export const Stack = ({ align = 'start', direction = 'column', isInline = false, justify = 'start', spacing = 0, wrap = false, style, children }) => {
    const stackStyles = {
        display: isInline ? 'inline-flex' : 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: spacing ? `${spacing}px` : '0px',
        ...style
    };
    return (React.createElement("div", { className: `StackContainer ${direction === 'column' ? 'column' : 'row'}`, style: stackStyles }, children));
};
//# sourceMappingURL=Stack.js.map