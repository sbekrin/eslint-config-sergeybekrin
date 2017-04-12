module.exports = {
    parser: 'babel-eslint',
    env: {
        es6: true,
    },
    extends: [
        './stylistic.js',
        './best-practices.js',
        './possible-errors.js'
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        'babel'
    ],
    rules: {}
};