import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import multiInput from 'rollup-plugin-multi-input'
import copy from 'rollup-plugin-copy'

export default [
  {
    input: ['src/**/*.js'],
    output: {
      dir: 'dist/',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      multiInput.default(),
      terser(),
      postcss({
        inject: false,
        autoModules: true,
        external: false,
        minimize: true,
      }),
      copy({
        targets: [{ src: 'src/global.d.ts', dest: 'dist' }],
      }),
    ],
  },
]
