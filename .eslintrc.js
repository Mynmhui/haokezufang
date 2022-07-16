module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": 0,
    semi: [2, "never"],
  },
}
