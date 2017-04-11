module.exports = {
    parser: 'babel-eslint',
    env: {
        es6: true,
    },
    extends: [
        './stylistic',
        './best-practices',
        './possible-errors'
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