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
            postcssPlugins: [
                (css) => {
                    const rootSelector = ':global(.root)'; // Change .root to the class name of the root element in your component
                    css.walkRules((rule) => {
                        if (rule.selector.startsWith(':global')) return;
                        rule.selector = `${rootSelector} ${rule.selector}`;
                    });
                }
            ]
        })
    ]
};
