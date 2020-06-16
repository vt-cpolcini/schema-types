import ts from '@wessberg/rollup-plugin-ts'

const build = (format) => ({
  input: './src/index.ts',
  output: {
    dir: `dist/${format}`,
    format: format,
    sourcemap: true,
  },
  plugins: [ts()],
})

export default [build('cjs'), build('es')]
