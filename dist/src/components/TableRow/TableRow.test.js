import React from 'react';
import { TableRow } from './TableRow';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('TableRow component', () => {
    test('renders table row with default className', () => {
        const { container } = render(React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement(TableRow, null,
                    React.createElement("td", null, "Table row content")))));
        const tableRowElement = container.querySelector('tr');
        expect(tableRowElement).toBeInTheDocument();
        expect(tableRowElement).toHaveClass('tableRow');
    });
    test('renders table row with custom className', () => {
        const { container } = render(React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement(TableRow, { className: "customTableRow" },
                    React.createElement("td", null, "Table row content")))));
        const tableRowElement = container.querySelector('tr');
        expect(tableRowElement).toBeInTheDocument();
        expect(tableRowElement).toHaveClass('customTableRow');
    });
});
//# sourceMappingURL=TableRow.test.js.map