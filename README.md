# @hyperse-io/graphql-codegen-enum

Gernated by graphql-codegen only for scalar type enum

# Usage

1. `yarn graphql @graphql-codegen/cli @graphql-codegen/add @hyperse-io/graphql-codegen-enum`

2. setup codegen plugin on `codegen.cjs`

```cjs
module.exports = {
  overwrite: true,
  config: {
    strict: true,
  },
  generates: {
    "src/generated-types.ts": {
      schema: "http://localhost:7001/admin-api",
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "@hyperse-io/graphql-codegen-enum",
      ],
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
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
