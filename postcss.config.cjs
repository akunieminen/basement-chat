module.exports = {
  plugins: {
    "@tailwindcss/postcss": { optimize: true },
    "postcss-prefix-selector": {
      prefix: ".basement",
      transform(prefix, selector, prefixedSelector) {
        if (["html", "body", ":root", ":host"].includes(selector)) {
          return prefix;
        }

        if (typeof selector === "string" && selector.includes("tippy")) {
          return selector;
        }

        return prefixedSelector;
      },
    },
  },
};
