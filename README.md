# @hyperse/graphql-codegen-enum

<p align="left">
  <a aria-label="Build" href="https://github.com/hyperse-io/graphql-codegen-enum/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/actions/workflow/status/hyperse-io/graphql-codegen-enum/ci-integrity.yml?branch=main&label=ci&logo=github&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="stable version" href="https://www.npmjs.com/package/@hyperse/graphql-codegen-enum">
    <img alt="stable version" src="https://img.shields.io/npm/v/%40hyperse%2Fgraphql-codegen-enum?branch=main&label=version&logo=npm&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="Top language" href="https://github.com/hyperse-io/graphql-codegen-enum/search?l=typescript">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/hyperse-io/graphql-codegen-enum?style=flat-square&labelColor=000&color=blue">
  </a>
  <a aria-label="Licence" href="https://github.com/hyperse-io/graphql-codegen-enum/blob/main/LICENSE">
    <img alt="Licence" src="https://img.shields.io/github/license/hyperse-io/graphql-codegen-enum?style=flat-quare&labelColor=000000" />
  </a>
</p>
Gernated by graphql-codegen only for scalar type enum

# Usage

1. `yarn graphql @graphql-codegen/cli @graphql-codegen/add @hyperse/graphql-codegen-enum`

2. setup codegen plugin on `codegen.cjs`

```cjs
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
        '@hyperse/graphql-codegen-enum',
      ],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};
```

3. Define codegen `scripts`

```json
{
  "scripts": {
    "codegen": "graphql-codegen --config ./codegen.cjs"
  }
}
```

4. `yarn codegen`

## Note

This plugin normally used to `gql.tada`, it will forcely only generated all `enum` object, we assume that you don't need any other codegen typings except enum.
