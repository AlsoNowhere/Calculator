
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const output = {
    file: "./dist/app.js",
    format: "iife"
}

export default {
    input: "./src/index.js",
    output,
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve()
    ],
    watch: {
        exclude: "node_modules/**"
    }
}