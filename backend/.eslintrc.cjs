module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true, // Support des fonctionnalités ES2021
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'], // Lien avec tsconfig.json
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier', // Assure la compatibilité avec Prettier
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal', // Grouper les imports aliasés `@`
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc', // Ordre alphabétique
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': 'error', // Ligne vide après les imports
    'import/no-unresolved': 'error', // Identifier les imports non résolus
    '@typescript-eslint/require-await': 'error', // Exiger `await` dans les fonctions async
    '@typescript-eslint/no-explicit-any': 'warn', // Éviter `any`
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Autoriser les paramètres non utilisés commençant par `_`
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        suffix: ['Interface'],
      },
    ],
    'no-console': 'warn', // Avertir pour les `console.log`
    eqeqeq: ['error', 'always'], // Exiger `===` au lieu de `==`
    'prefer-const': 'error', // Préférer `const` si possible
    'no-var': 'error', // Interdire `var`
    curly: ['error', 'all'], // Exiger des accolades autour des blocs
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Résolution des alias définis dans tsconfig.json
      alias: {
        map: [['@', './src']], // Mapping de `@` vers `src`
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
};
