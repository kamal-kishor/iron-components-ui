import React from 'react';
import { Switch } from './Switch';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Switch component', () => {
    test('renders with default props', () => {
        const { container } = render(React.createElement(Switch, null));
        const switchElement = container.firstChild;
        expect(switchElement).toBeInTheDocument();
        expect(switchElement.tagName).toBe('DIV');
        expect(switchElement).toHaveClass('switch');
        const inputElement = switchElement.querySelector('input[type="checkbox"]');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('id', 'switch-toggle');
        expect(inputElement.checked).toBe(false);
        const labelElement = switchElement.querySelector('label');
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveAttribute('for', 'switch-toggle');
    });
    test('handles onChange event', () => {
        const handleChange = jest.fn();
        const { container } = render(React.createElement(Switch, { onChange: handleChange }));
        const inputElement = container.querySelector('input[type="checkbox"]');
        fireEvent.click(inputElement);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    });
});
//# sourceMappingURL=Switch.test.js.map