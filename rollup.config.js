import babel from 'rollup-plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
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
      nodeResolve(),
      terser(),
      commonjs({
        include: 'node_modules/**',
      }),
      postcss({
        modules: true,
        external: false,
      }),
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },
]
