module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/html-indent': ['error', 'tab', {
      'attribute': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
		'vue/html-closing-bracket-newline': 'off',
		'vue/html-self-closing': ['error', {
			'html': {
				'normal': 'never',
				'void': 'always'
			},
			'svg': 'always',
			'math': 'always'
		}],
    'indent': ['error', 'tab'],
    'no-tabs': 'off'
  }
}
