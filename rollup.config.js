import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import externals from 'rollup-plugin-node-externals'
import multiInput from 'rollup-plugin-multi-input'

export default [
  {
    input: ['src/**/*.js'],
    output: {
      dir: 'dist/',
      format: 'esm',
    },
    plugins: [
      externals(),
      multiInput(),
      terser(),
      postcss({
        modules: true,
        external: false,
        minimize: true,
      }),
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },
]
