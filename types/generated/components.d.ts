import type { Schema, Struct } from '@strapi/strapi';

export interface TestQuestion extends Struct.ComponentSchema {
  collectionName: 'components_test_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    questionText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'test.question': TestQuestion;
    }
  }
}
