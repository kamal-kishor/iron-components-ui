import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';

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
            extensions: ['.css'],
            extract: true,
            modules: {
                generateScopedName: '[name]__[local]___[hash:base64:5]'
            },
            namedExports: true,
            inject: false,
            sourceMap: true,
            autoModules: true,
            plugins: [postcssImport(), postcssUrl(), autoprefixer()],
            use: ['sass'],
            minimize: false,
            transform: (css) => {
                const classNameRegex = /\.([^\s{]+)/g;
                const defaultClassRegex = /\.default([^\s{]*)/g;

                const customClasses = css.match(classNameRegex);
                const defaultClasses = css.match(defaultClassRegex);

                if (customClasses && defaultClasses) {
                    const updatedCSS = css.replace(defaultClassRegex, '.default$1');
                    return updatedCSS;
                }

                return css;
            }
        })
    ]
};
