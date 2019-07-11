module.exports = {
    ident: 'postcss',
    plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-nested'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
            flexbox: 'no-2009',
        }),
    ],
};
