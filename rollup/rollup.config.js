import svelte from "rollup-plugin-svelte"
import pkg from "../package.json"

export default {
    input: pkg.svelte,
    output: {
        sourcemap: true,
        format: "es",
        name: "app",
        file: pkg.module,
    },
    plugins: [
        svelte({
            compilerOptions: {
                // enable run-time checks when not in production
                dev: false,
            },
        }),
    ],
}
