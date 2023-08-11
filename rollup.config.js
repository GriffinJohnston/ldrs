import { babel } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import multiInput from 'rollup-plugin-multi-input'

export default [
  {
    input: ['src/**/*.js'],
    output: {
      dir: 'dist/',
      format: 'esm',
      sourcemap: true,
    },
    external: ['react'],
    plugins: [
      multiInput.default(),
      terser(),
      postcss({
        inject: false,
        autoModules: true,
        external: false,
        minimize: true,
      }),
      babel({
        exclude: ['node_modules/**'],
        babelHelpers: 'bundled',
      }),
    ],
  },
]
