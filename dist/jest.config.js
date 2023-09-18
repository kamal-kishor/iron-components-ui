/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|sass)$': 'identity-obj-proxy'
    }
};
//# sourceMappingURL=jest.config.js.map