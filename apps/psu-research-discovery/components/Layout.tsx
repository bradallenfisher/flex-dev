import {
  ThemeProvider,
  RichTextContentfulParser,
  BrandFooter,
  BrandBar,
} from '@psu-flex/core-ui';
import { FlexHeader, Footer } from './index';

export function Layout({ children, brandBar, footer, header, brandFooter }) {
  return (
    <ThemeProvider parser={RichTextContentfulParser}>
      <BrandBar
        ctaItemsCollection={brandBar?.ctaItemsCollection?.items}
        flyOutMenuNavItemsCollection={
          brandBar?.flyOutMenuNavItemsCollection?.items
        }
        flyOutMenuPopularLinksItemsCollection={
          brandBar?.flyOutMenuPopularLinksItemsCollection?.items
        }
      />
      <FlexHeader
        navItemsCollection={header?.navItemsCollection?.items}
        ctaItemsCollection={header?.ctaItemsCollection?.items}
        tierThreeDepartment={header?.tierThreeDepartment}
        tierTwoEntity={header?.tierTwoEntity}
      />
      {children}
      <Footer
        contactItems={footer?.contactItemsCollection?.items}
        streetAddress={footer?.streetAddress}
        navItems={footer?.navItemsCollection?.items}
        socialIcons={footer?.socialIconsCollection?.items}
      />
      <BrandFooter linkItems={brandFooter?.linkItemsCollection?.items} />
    </ThemeProvider>
  );
}
