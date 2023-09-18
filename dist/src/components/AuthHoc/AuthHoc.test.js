import React from 'react';
import { AuthHOC } from './AuthHoc';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
const MockComponent = () => React.createElement("div", null, "Mock Component");
describe('AuthHOC', () => {
    test('renders the wrapped component when isAuthenticated is true', () => {
        const isAuthenticated = true;
        const ComponentWithAuth = AuthHOC(MockComponent);
        const { getByText } = render(React.createElement(ComponentWithAuth, { isAuthenticated: isAuthenticated }));
        expect(getByText('Mock Component')).toBeInTheDocument();
    });
    // test('redirects to /login when isAuthenticated is false', () => {
    //     const isAuthenticated = false;
    //     const ComponentWithAuth = AuthHOC(MockComponent);
    //     const { container } = render(
    //         <MemoryRouter initialEntries={['/']}>
    //             <ComponentWithAuth isAuthenticated={isAuthenticated} />
    //         </MemoryRouter>
    //     );
    //     expect(container.innerHTML).toContain('<a href="/login"></a>');
    //     expect(container.innerHTML).toContain('window.location.replace("/login")');
    // });
});
//# sourceMappingURL=AuthHoc.test.js.map