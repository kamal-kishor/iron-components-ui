import React from 'react';
import { Card } from './Card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Card', () => {
    test('should render with default props', () => {
        const { getByText } = render(React.createElement(Card, null));
        const titleElement = getByText('Title of Your Card');
        const bodyElement = getByText('This is the Body Section');
        expect(titleElement).toBeInTheDocument();
        expect(bodyElement).toBeInTheDocument();
        expect(titleElement).toHaveClass('cardTitle');
        expect(bodyElement).toHaveClass('cardDesc');
    });
    test('should render with custom props and apply appropriate classes', () => {
        const { container } = render(React.createElement(Card, { className: "customCard", padding: "10px", title: "Custom Card Title", cardheaderimg: "image.png", height: "200px" },
            React.createElement("p", null, "Custom Card Content")));
        const cardElement = container.querySelector('.customCard');
        const cardTitle = container.querySelector('.cardHead');
        const cardFooter = container.querySelector('.cardFooter');
        const cardContent = container.querySelector('.cardBody');
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveClass('customCard');
        expect(cardTitle).toBeInTheDocument();
        expect(cardTitle?.querySelector('img')).toHaveAttribute('src', 'image.png');
        expect(cardFooter).toBeInTheDocument();
        expect(cardFooter).toHaveTextContent('Custom Card Content');
        expect(cardContent).toBeInTheDocument();
        expect(cardContent).toHaveTextContent('Custom Card TitleThis is the Body Section');
        expect(cardContent).toHaveStyle('padding: 10px');
    });
});
//# sourceMappingURL=Card.test.js.map