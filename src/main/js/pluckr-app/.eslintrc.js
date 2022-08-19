module.exports = {
  parserOptions: {
    ecmaVersion: 13,
  },
  extends: ['@open-wc', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['rollup.mapbox.js', 'rollup.config.js'] },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
