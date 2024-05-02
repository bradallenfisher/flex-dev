export type BrandFooterLink = {
  title: string;
  to: string;
  pageRef?: string;
}
export type BrandFooterLinkCollection = {
  linkItemsCollection: {
    items: BrandFooterLink[];
  }
}
export interface BrandFooterProps {
  linkItems?: BrandFooterLink[];
}
