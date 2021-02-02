module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: (theme) => ({
            ...theme('colors'),
            mypink: '#fd8598',
            myblue: '#6dcfed',
            danger: '#e3342f',
        }),

        extend: {
            backgroundColor: (theme) => ({
                ...theme('colors'),
                mypink: '#fd8598',
                myblue: '#6dcfed',
                danger: '#e3342f',
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
