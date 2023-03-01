module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "simple-import-sort",
        "import",
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "prettier/prettier": ["error", { printWidth: 120 }],
        indent: ["error", 2],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/parsers": {
            [require.resolve("@typescript-eslint/parser")]: [
                ".ts",
                ".tsx",
                ".d.ts",
            ],
        },
    },
};
