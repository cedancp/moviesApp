module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    jest: true,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn', // <--- THIS IS THE NEW RULE
  },
};
