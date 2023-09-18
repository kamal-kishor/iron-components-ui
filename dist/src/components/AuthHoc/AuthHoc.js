import React from 'react';
import { Navigate } from 'react-router-dom';
export const AuthHOC = (WrappedComponent) => {
    const ComponentWithAuth = (props) => {
        if (!props.isAuthenticated) {
            return React.createElement(Navigate, { to: "/login" });
        }
        return React.createElement(WrappedComponent, { ...props });
    };
    return ComponentWithAuth;
};
//# sourceMappingURL=AuthHoc.js.map