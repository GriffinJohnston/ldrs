import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import multiInput from 'rollup-plugin-multi-input'
import { libStylePlugin } from 'rollup-plugin-lib-style'

export default [
  {
    input: [
      'temp-ts-out/*.js',
      'temp-ts-out/lib/*.js',
      'temp-ts-out/elements/*.js',
      'temp-ts-out/auto/*.js',
    ],
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
      multiInput(),
      terser(),
      postcss({
        inject: false,
        autoModules: true,
        minimize: true,
      }),
    ],
  },
  {
    input: ['temp-ts-out/react/*.js'],
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
      multiInput(),
      terser(),
      libStylePlugin({
        importCSS: false,
        scopedName: '[local]_[hash:hex:6]',
        customCSSPath: (id) => {
          return id
            .replace(process.cwd(), '')
            .replace(/\\/g, '/')
            .replace('temp-ts-out/', '')
        },
      }),
    ],
  },
]
