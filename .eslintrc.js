/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.lint.json',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jest-dom',
    'testing-library',
    'import',
    'prettier',
    'jest',
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: ['camelCase', 'snake_case'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-plusplus': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:jest/all',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      rules: {
        'no-explicit-any': 'off',
        'jest/no-hooks': 'off',
        'jest/prefer-called-with': 'off',
        'jest/prefer-strict-equal': 'off',
        'jest/prefer-importing-jest-globals': 'off',
        'jest/max-expects': [
          'error',
          {
            max: 6,
          },
        ],
      },
      settings: {
        jest: {
          version: require('jest/package.json').version,
        },
      },
    },
  ],
};
