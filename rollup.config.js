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
            modules: {
                generateScopedName: '[name]__[local]___[hash:base64:5]'
            },
            use: ['sass'], // Add any other required PostCSS plugins here
            minimize: true,
            inject: false,
            sourceMap: true,
            autoModules: true,
            namedExports: true,
            modules: true,
            postcssModulesOptions: {
                generateScopedName: '[name]__[local]___[hash:base64:5]'
            },
            loader: 'sass',
            transform: (css) => {
                const classNameRegex = /\.([^\s{]+)/g;
                const defaultClassRegex = /\.root([^\s{]*)/g;

                const customClasses = css.match(classNameRegex);
                const defaultClasses = css.match(defaultClassRegex);

                if (customClasses && defaultClasses) {
                    const updatedCSS = css.replace(defaultClassRegex, '.root$1');
                    return updatedCSS;
                }

                return css;
            }
        })
    ]
};
