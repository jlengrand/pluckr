import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'node_modules/mapbox-gl/dist/mapbox-gl-unminified.js',
    output: {
      file: 'dist/mapbox-gl.esm.js',
      format: 'esm',
    },
    plugins: [commonjs()],
  },
  {
    input: 'node_modules/mapbox-gl/dist/mapbox-gl-unminified.js',
    output: {
      file: 'dist/mapbox-gl.esm.min.js',
      format: 'esm',
    },
    plugins: [terser(), commonjs()],
  },
  {
    input: 'node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js',
    output: {
      file: 'dist/mapbox-gl-geocoder.esm.min.js',
      format: 'esm',
    },
    plugins: [commonjs()],
  }
]
