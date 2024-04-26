import { type PluginFunction, oldVisit } from '@graphql-codegen/plugin-helpers';
import { transformSchemaAST } from '@graphql-codegen/schema-ast';
import { TsVisitor } from '@graphql-codegen/typescript';

/**
 * The plugin function to generate TypeScript code from the GraphQL schema only for enums.
 * @returns
 */
export const plugin: PluginFunction<any> = (schema, documents, config = {}) => {
  config = Object.assign(config, {
    onlyEnums: true,
    namingConvention: {
      enumValues: 'keep',
    },
  });
  const { schema: _schema, ast } = transformSchemaAST(schema, config);
  const visitor = new TsVisitor(_schema, config);
  const visitorResult = oldVisit(ast, { leave: visitor as any });
  return {
    content: [...visitorResult.definitions].filter(Boolean).join('\n'),
  };
};
