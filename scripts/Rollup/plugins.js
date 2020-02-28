import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from "rollup-plugin-terser";

export default () => [
  external(),
  resolve({
    browser: true,
  }),
  commonjs({
    include: ['node_modules/**'],
    exclude: ['**/*.stories.tsx'],
    namedExports: {
      'node_modules/react/react.js': [
        'Children',
        'Component',
        'PropTypes',
        'createElement',
      ],
      'node_modules/react-dom/index.js': ['render'],
      'node_modules/react-is/index.js': [
        'isElement',
        'isValidElementType',
        'ForwardRef'
      ]
    },
  }),
  terser(),
];
