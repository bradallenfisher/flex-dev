import {
  TEXT_FIELD_GRAPHQL_FIELDS,
  TEXT_AREA_GRAPHQL_FIELDS,
} from '@psu-flex/graphql-models';

const FORM_GRAPHQL_FIELDS = `
    __typename
    title
    aligned
    formWidth
    ctaButtonSize
    backgroundColor
    hideFormAfterSubmitted
    sheetId
    spreadsheetId
    textFieldContentCollection(limit: 5) {
      items {
        ${TEXT_FIELD_GRAPHQL_FIELDS}
      }
    }
    textAreaContentCollection(limit: 5) {
      items {
        ${TEXT_AREA_GRAPHQL_FIELDS}
      }
    }
  `;

export { FORM_GRAPHQL_FIELDS };
