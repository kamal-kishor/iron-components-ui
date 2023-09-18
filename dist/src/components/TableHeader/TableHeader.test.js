import React from 'react';
import { TableHeader } from './TableHeader';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('TableHeader', () => {
    test('renders table header correctly', () => {
        const headerText = 'Table Header';
        const { getByText } = render(React.createElement("table", null,
            React.createElement(TableHeader, null,
                React.createElement("tr", null,
                    React.createElement("th", null, headerText)))));
        const headerElement = getByText(headerText);
        expect(headerElement).toBeInTheDocument();
        expect(headerElement.tagName).toBe('TH');
    });
});
//# sourceMappingURL=TableHeader.test.js.map