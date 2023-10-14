import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import multiInput from 'rollup-plugin-multi-input'

export default [
  {
    input: ['temp-ts-out/**/*.js'],
    output: {
      dir: 'dist/',
      format: 'esm',
      sourcemap: true,
      entryFileNames: (chunkInfo) => {
        const modified = chunkInfo.name.replace('temp-ts-out', '').substring(1)
        return `${modified}.js`
      },
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
    ],
  },
]
