module.exports = {
  parser: '@typescript-eslint/parser', // Parse TypeScript
  parserOptions: {
    project: './tsconfig.json',
    jsx: false
  },
  rules: { 
    // disable or configure individual rules
  },
  extends: [
    // Use the rules from these plugins 
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ]
};
