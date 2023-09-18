import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from './Badge';
import '@testing-library/jest-dom';
describe('Badge component', () => {
    test('renders with default props', () => {
        const { getByTestId } = render(React.createElement(Badge, null));
        const badgeElement = getByTestId('tooltip');
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveClass('badge-primary');
    });
    test('renders with custom props', () => {
        const props = {
            label: 5,
            type: 'success',
            max: 10
        };
        const { getByTestId } = render(React.createElement(Badge, { ...props }));
        const badgeElement = getByTestId('tooltip');
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveTextContent('5');
        expect(badgeElement).toHaveClass('badge-success');
    });
    test('truncates label if greater than max', () => {
        const props = {
            label: 15,
            max: 10
        };
        const { getByText } = render(React.createElement(Badge, { ...props }));
        const badgeElement = getByText('10+');
        expect(badgeElement).toBeInTheDocument();
    });
});
//# sourceMappingURL=Badge.test.js.map