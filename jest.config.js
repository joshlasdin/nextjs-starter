module.exports = {
    moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '@test(.*)$': '<rootDir>/test/$1',
    },
    setupFilesAfterEnv: ['./test/setup.js'],
};
