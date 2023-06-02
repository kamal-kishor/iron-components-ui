import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss({
            extract: true,
            modules: true,
            namedExports: true,
            inject: false,
            sourceMap: true,
            autoModules: true,
            modules: {
                generateScopedName: '[name]__[local]___[hash:base64:5]'
            },
            use: ['sass'], // Add any other required PostCSS plugins here
            // Add a custom PostCSS plugin to increase specificity of custom CSS classes
            // This plugin prefixes all CSS selectors with a specific class name
            // Change 'custom-css-prefix' to a class name that is unlikely to clash with other class names
            postcssPlugins: [
                (css) => {
                    css.walkRules((rule) => {
                        if (rule.selector.startsWith(':global')) return;
                        rule.selectors = rule.selectors.map((selector) => `.custom-css-prefix ${selector}`);
                    });
                }
            ]
        })
    ]
};
