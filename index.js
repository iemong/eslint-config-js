module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: ["airbnb-base", "eslint:recommended", "prettier"],
  rules: {
    "no-console": 1,
    "import/no-default-export": 2,
    "import/prefer-default-export": 0,
    "import/order": 2,
  },
}
