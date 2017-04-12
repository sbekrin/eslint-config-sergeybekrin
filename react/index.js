module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react'
    ],
    rules: {
        'jsx-quotes': [ 'error', 'prefer-double' ],
        'react/display-name': [ 'error', {
            ignoreTranspilerName: false
        }],
        'react/forbid-component-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': 'error',
        'react/forbid-prop-types': 'off',
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-curly-spacing': [ 'error', 'never', {
            allowMultiline: true
        }],
        'react/jsx-equals-spacing': 'error',
        'react/jsx-filename-extension': [ 'error', {
            extensions: [ '.js' ]
        }],
        'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': [ 'error', 4 ],
        'react/jsx-indent-props': [ 'error', 4 ],
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': [ 'warn', {
            maximum: 4
        }],
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': 'off',
        'react/jsx-space-before-closing': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'error',
        'react/no-array-index-key': 'warn',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-danger': 'warn',
        'react/no-deprecated': 'warn',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'warn',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': [ 'error', {
            ignoreStateless: true
        }],
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'warn',
        'react/no-unused-prop-types': 'error',
        // 'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'off',
        'react/prefer-stateless-function': [ 'error', {
            ignorePureComponents: true
        }],
        'react/prop-types': 'warn',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'off',
        'react/require-extension': 'off',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'off',
        'react/sort-prop-types': 'off',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error'
    }
};