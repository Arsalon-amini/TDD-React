module.exports = { 
    plugins: ['jest'],
    extends: ['plugin:jest/recommended'], 
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }]
    },
  };