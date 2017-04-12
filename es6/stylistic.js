module.exports = {
    rules: {
        'sort-imports': 'off',
        'object-curly-spacing': 'off',
        'babel/object-curly-spacing': [ 'error', 'always' ],
        semi: 'off',
        'babel/semi': [ 'error', 'always' ],
        'no-invalid-this': 'off',
        'babel/no-invalid-this': 'error',
        'new-cap': 'off',
        'babel/new-cap': [ 'error', {
            newIsCap: true,
            capIsNew: true
        }]
    }
};