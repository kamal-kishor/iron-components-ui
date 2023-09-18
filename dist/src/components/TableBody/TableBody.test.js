import React from 'react';
import { TableBody } from './TableBody';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('TableBody', () => {
    test('renders the children inside a tbody element', () => {
        const children = (React.createElement("tr", null,
            React.createElement("td", null, "Row 1")));
        const { container } = render(React.createElement("table", null,
            React.createElement(TableBody, null, children)));
        const tbodyElement = container.querySelector('tbody');
        expect(tbodyElement).toBeInTheDocument();
        const rowElement = container.querySelector('tr');
        expect(rowElement).toBeInTheDocument();
        expect(rowElement?.textContent).toBe('Row 1');
    });
});
//# sourceMappingURL=TableBody.test.js.map