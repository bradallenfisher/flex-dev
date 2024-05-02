const LINK_GRAPHQL_FIELDS = `
  title
  to
  pageRef
  {
    __typename
  }
`;

const TEXT_FIELD_GRAPHQL_FIELDS = `
  title
  placeholder
  __typename
  label
  type
  isRequired
`;

const TEXT_AREA_GRAPHQL_FIELDS = `
  placeholder
  __typename
  label
  isRequired
`;

const ICON_BUTTON_GRAPHQL_FIELDS = `
  href
  iconName
`;

const LABEL_VALUE_PAIR_GRAPHQL_FIELDS = `
  label
  value
  href
`;

const TEXT_GRAPHQL_FIELDS = `
  richText
  {
    json
  }
`;

const META_DATA_FIELDS = `
  hidePageFromSearchEnginesNoindex
  keywords
  seoTitle
  excludeLinksFromSearchRankingsNofollow
  description
`;

const ASSET_COLLECTION = `
  items
  {
    url
    sys
    {
      id
    }
  }
`;

export {
  ASSET_COLLECTION,
  META_DATA_FIELDS,
  LABEL_VALUE_PAIR_GRAPHQL_FIELDS,
  ICON_BUTTON_GRAPHQL_FIELDS,
  LINK_GRAPHQL_FIELDS,
  TEXT_AREA_GRAPHQL_FIELDS,
  TEXT_GRAPHQL_FIELDS,
  TEXT_FIELD_GRAPHQL_FIELDS,
};
