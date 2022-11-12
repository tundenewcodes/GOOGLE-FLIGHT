module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px+',
        },
        extend: {
            fontFamily: {
                'pt': ['"PT Sans"', 'cursive'],
                'roboto': ['Roboto']
            },
        },
        plugins: [],
    },
}