import React from 'react';
import { Tooltip } from './Tooltip';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Tooltip', () => {
    test('renders tooltip text when hovered over', () => {
        const tooltipText = 'Tooltip text';
        const { getByTestId, getByText, queryByText } = render(React.createElement(Tooltip, { text: tooltipText },
            React.createElement("span", null, "Hover over me")));
        const tooltipHoverElement = getByTestId('tooltipHover');
        expect(tooltipHoverElement).toBeInTheDocument();
        fireEvent.mouseEnter(tooltipHoverElement);
        const tooltipTextElement = getByText(tooltipText);
        expect(tooltipTextElement).toBeInTheDocument();
        fireEvent.mouseLeave(tooltipHoverElement);
        expect(queryByText(tooltipText)).toBeNull();
    });
});
//# sourceMappingURL=Tooltip.test.js.map