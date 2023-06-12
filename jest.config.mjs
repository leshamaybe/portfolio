import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

/** @type {import('jest').Config} */
const config = {
    collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
    extensionsToTreatAsEsm: ['.jsx'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
        '@/mockData(.*)': '<rootDir>/src/__mocks__/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
