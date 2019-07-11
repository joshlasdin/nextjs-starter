const withCSS = require('@zeit/next-css');
const DotenvPlugin = require('dotenv-webpack');

module.exports = withCSS({
    distDir: '../dist',
    exportTrailingSlash: true,

    webpack: config => {
        // Module alias to /src directory
        config.resolve.modules = [process.env.NODE_PATH, 'node_modules'];

        // Linter
        config.module.rules.unshift({
            test: /\.(js|jsx|mjs)$/,
            enforce: 'pre',
            include: __dirname,
            use: [
                {
                    options: {
                        formatter: require('format-messages-webpack-plugin/formatter'),
                        emitWarning: true,
                        eslintPath: require.resolve('eslint'),
                    },
                    loader: require.resolve('eslint-loader'),
                },
            ],
        });

        // dotenv
        config.plugins.push(new DotenvPlugin());

        return config;
    },
});
