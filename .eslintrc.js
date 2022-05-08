// https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c
// https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // This will start reading .prettierrc.json.
  ],
  globals: {
    firebase: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['warn', { code: 100, ignoreStrings: true }],
    'vue/max-len': ['warn', { code: 100, ignoreStrings: true }],
    'vue/component-tags-order': ['off', { order: ['template', 'style', 'script'] }],
    'vue/order-in-components': 'off',
    'vue/no-v-html': 'off',
    'prefer-const': 'warn',
    'prettier/prettier': ['warn', { singleQuote: true, printWidth: 100 }],
    quotes: [1, 'single', {}],
  },
};
