export type BrandBarLink = {
  title: string;
  to: string;
}
export type BrandBarLinkCollection = {
  items: BrandBarLink[];
}
export type BrandBarTypes = {
  ctaItemsCollection: BrandBarLink[] | undefined;
  flyOutMenuNavItemsCollection: BrandBarLink[] | undefined;
  flyOutMenuPopularLinksItemsCollection: BrandBarLink[] | undefined;
}