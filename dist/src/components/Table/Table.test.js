import React from 'react';
import { Table } from './Table';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Table', () => {
    test('renders a table with correct class name', () => {
        const { getByTestId } = render(React.createElement(Table, { className: "custom-class" },
            React.createElement("tbody", { "data-testid": "table-body" },
                React.createElement("tr", null,
                    React.createElement("td", null, "Row 1"),
                    React.createElement("td", null, "Row 2")))));
        const tableContainer = getByTestId('table-container');
        const table = getByTestId('table-body');
        expect(tableContainer).toHaveClass('custom-class');
        expect(table).toBeInTheDocument();
    });
    test('renders a table with default class name if no className prop is provided', () => {
        const { getByTestId } = render(React.createElement(Table, null,
            React.createElement("tbody", { "data-testid": "table-body" },
                React.createElement("tr", null,
                    React.createElement("td", null, "Row 1"),
                    React.createElement("td", null, "Row 2")))));
        const tableContainer = getByTestId('table-container');
        const table = getByTestId('table-body');
        expect(tableContainer).toHaveClass('table-container');
        expect(table).toBeInTheDocument();
    });
});
//# sourceMappingURL=Table.test.js.map