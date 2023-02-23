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
  },
}
