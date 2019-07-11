module.exports = {
    ident: 'postcss',
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
            flexbox: 'no-2009',
        }),
    ],
};
