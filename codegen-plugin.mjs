import { oldVisit } from '@graphql-codegen/plugin-helpers';
import { transformSchemaAST } from '@graphql-codegen/schema-ast';
import { TsVisitor } from '@graphql-codegen/typescript';

export const plugin = (schema, documents, config) => {
  config = Object.assign(config, {
    onlyEnums: true,
    namingConvention: {
      enumValues: 'keep',
    },
  });
  const { schema: _schema, ast } = transformSchemaAST(schema, config);
  const visitor = new TsVisitor(_schema, config);
  const visitorResult = oldVisit(ast, { leave: visitor });
  return {
    content: [...visitorResult.definitions].filter(Boolean).join('\n'),
  };
};
