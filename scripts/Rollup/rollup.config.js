import plugins from './plugins.js';

export default [
  /**
   * Main Bundle
  */
  {
    input: "build/index.js",
    output: [
      {
        file: 'build/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'build/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: plugins(),
  },
  /**
   * Components Bundle
  */
  {
    input: "build/Components/index.js",
    output: [
      {
        file: 'build/Components/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'build/Components/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: plugins(),
  },
  /**
   * Utils Bundle
  */
  {
    input: "build/Utils/index.js",
    output: [
      {
        file: 'build/Utils/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'build/Utils/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: plugins(),
  }
];
