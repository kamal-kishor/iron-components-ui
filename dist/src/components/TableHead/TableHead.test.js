import React from 'react';
import { TableHead } from './TableHead';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('TableHead', () => {
    test('renders the table header with default class name', () => {
        const { getByText } = render(React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement(TableHead, null, "Header Text")))));
        const tableHeader = getByText('Header Text');
        expect(tableHeader).toBeInTheDocument();
        expect(tableHeader.tagName).toBe('TH');
        expect(tableHeader).toHaveClass('tableHead');
    });
    test('renders the table header with custom class name', () => {
        const { getByText } = render(React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement(TableHead, { className: "customClassName" }, "Header Text")))));
        const tableHeader = getByText('Header Text');
        expect(tableHeader).toBeInTheDocument();
        expect(tableHeader.tagName).toBe('TH');
        expect(tableHeader).toHaveClass('customClassName');
    });
});
//# sourceMappingURL=TableHead.test.js.map