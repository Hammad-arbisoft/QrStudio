import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import pluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,

    {
        plugins: {
            js: pluginJs,
            react: pluginReact,
            prettier: pluginPrettier,
        },
        rules: {
            ...pluginJs.configs.recommended.rules, // Base JS rules
            ...pluginReact.configs.recommended.rules, // React rules
            ...eslintConfigPrettier.rules, // Disable conflicting ESLint rules
            'prettier/prettier': 'error', // Enforce Prettier formatting
            'no-trailing-spaces': 'error', // Disallow trailing spaces
            'space-in-parens': ['error', 'never'], // Disallow spaces inside parentheses
            'array-bracket-spacing': ['error', 'never'], // Disallow spaces inside array brackets
            'semi-spacing': ['error', { before: false, after: true }], // Enforce space after semicolons
            'import/prefer-default-export': 'off', // https://gitlab.com/gitlab-org/frontend/rfcs/-/issues/20
            'import/no-unresolved': 'off',
            'no-unsafe-optional-chaining': 'off',
            'no-extra-boolean-cast': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/forbid-prop-types': 'off',
            'react/function-component-definition': 'off', // https://github.com/airbnb/javascript/issues/2505
            semi: ['error', 'always'],
            // 'arrow-body-style': ['error', 'as-needed'],
            'eol-last': ['error', 'always'],
            'comma-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            'max-len': [
                'error',
                {
                    code: 120,
                },
            ],
            'no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: false,
                },
            ],
            indent: ['error', 4],
            quotes: ['error', 'single'],
            camelcase: [
                'error',
                {
                    properties: 'never',
                },
            ],
            'arrow-parens': ['error', 'as-needed'],
            'func-style': ['error', 'expression'],
            'quote-props': ['error', 'as-needed'],
            // 'no-extra-parens': 'error',
            'no-extra-bind': 'error',
            'jsx-quotes': ['error', 'prefer-double'],
            'object-curly-spacing': ['error', 'always'],
            'keyword-spacing': ['error', { after: true, before: true }],
            'space-before-blocks': 2,
            'space-infix-ops': 2,
            'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
            'react/jsx-first-prop-new-line': [2],
            // 'react/jsx-max-props-per-line': [2, { maximum: { multi: 1, single: 1 } }],
            'react/jsx-equals-spacing': [2, 'never'],
            'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
            'react/jsx-closing-tag-location': ['error'],
            'react/jsx-props-no-multi-spaces': 2,
            'no-multiple-empty-lines': 2,
            'no-console': 2,
            'brace-style': [2, '1tbs'],
            'no-use-before-define': [0],
            'react/jsx-curly-newline': [2],
            // 'react/jsx-wrap-multilines': [2],
            'default-param-last': [0],
            'import/no-extraneous-dependencies': 'off',
            'react/jsx-wrap-multilines': ['error', { declaration: 'parens-new-line' }],
            // Prevents auto-removal of parentheses
        },
    },
];
