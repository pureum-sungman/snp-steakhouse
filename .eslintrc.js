module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'prettier',
        'prettier/vue'
    ],
    plugins: [
        'vue', 'prettier'
    ],
    rules: {
        "prettier/prettier": "error",
        "vue/max-attributes-per-line": 0,
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    globals: {
        'ga': true, // Google Analytics
        'process': true,
        'module': true
    }
};
