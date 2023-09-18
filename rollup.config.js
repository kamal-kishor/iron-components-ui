import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { dts } from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/cjs.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/esm.js',
            format: 'esm',
            sourcemap: true
        },
        { file: 'dist/iron-components-ui.d.ts', format: 'esm' },
        { file: 'types/iron-components-ui.d.ts', format: 'esm' }
    ],
    plugins: [
        peerDepsExternal(),
        resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        dts(),
        postcss({
            extract: false,
            extensions: ['.css', 'scss', 'module.css'],
            inject: {
                insertAt: 'top' // Insert custom className styles at the top
            },
            autoModules: true,
            getExportNamed: false,
            minimize: true,
            modules: {
                generateScopedName: '[name]__[local]___[hash:base64:5]' // CSS module class name format
            }
        })
    ]
};
