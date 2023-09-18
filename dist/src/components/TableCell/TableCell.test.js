import React from 'react';
import { TableCell } from './TableCell';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('TableCell', () => {
    test('renders the children and applies the className prop', () => {
        const className = 'customCell';
        const children = 'Table Cell Content';
        const { getByText } = render(React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement(TableCell, { className: className }, children)))));
        const tableCell = getByText('Table Cell Content');
        expect(tableCell).toBeInTheDocument();
        expect(tableCell).toHaveClass(className);
    });
    test('renders the children with default className if className prop is not provided', () => {
        const children = 'Table Cell Content';
        const { getByText } = render(React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement(TableCell, null, children)))));
        const tableCell = getByText('Table Cell Content');
        expect(tableCell).toBeInTheDocument();
        expect(tableCell).toHaveClass('tableCell');
    });
});
//# sourceMappingURL=TableCell.test.js.map