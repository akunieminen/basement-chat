import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import postcss from "rollup-plugin-postcss";

export default defineConfig([
  {
    input: "./resources/js/app.ts",
    output: {
      sourcemap: true,
      name: "Basement Bundle",
      file: "./dist/basement.bundle.min.js",
      format: "umd",
      // tippy.js reads process.env.NODE_ENV; the UMD bundle runs in browsers that have no `process` global.
      intro: 'var process = { env: { NODE_ENV: "production" } };',
    },
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      json(),
      postcss({
        extract: true,
        minimize: true,
      }),
      terser(),
      typescript(),
    ],
  },
  {
    input: "./resources/js/plugins/basement.ts",
    output: [
      {
        sourcemap: true,
        file: "./dist/basement.plugin.esm.js",
        format: "esm",
      },
      {
        sourcemap: true,
        file: "./dist/basement.plugin.common.js",
        format: "cjs",
        exports: "default",
      },
    ],
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: "./resources/js/plugins/echo-options.ts",
    output: [
      {
        sourcemap: true,
        file: "./dist/basement.echo-options.esm.js",
        format: "esm",
      },
      {
        sourcemap: true,
        file: "./dist/basement.echo-options.common.js",
        format: "cjs",
        exports: "default",
      },
    ],
    plugins: [typescript()],
  },
]);
