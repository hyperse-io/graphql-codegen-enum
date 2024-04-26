module.exports = {
  overwrite: true,
  config: {
    strict: true,
  },
  generates: {
    'src/generated-types.ts': {
      schema: 'http://localhost:7001/admin-api',
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        './dist/index.cjs',
      ],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};
