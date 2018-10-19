module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true,

  },
  'settings': {
    'ecmascript': 6,
  },
  'globals': {
    'ReactDOM': true,
    'React': true
  },
  'extends': [
    'eslint:recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    }
  },
  'rules': {
    'indent': ['error', 2, { "SwitchCase": 1 }],
    'linebreak-style': ['error','unix'],
    'quotes': ['error','single'],
    'semi': ['error','always'],
    'no-console': 'off',
  }
};
