import { PreviewAlert } from "@components/preview-alert"
import { ThemeProvider, RichTextDrupalParser, Flex, BrandBar, BrandBarLinkCollection, BrandFooterLinkCollection, BrandFooter } from "@psu-flex/psu-global-ui"
import { GoogleAnalytics } from '@next/third-parties/google'
import { MainMenu } from "@components/main-menu";
import { DrupalMenuLinkContent } from "next-drupal";
import { Footer } from "@components/footer";

const googleAnalyticsId = process?.env?.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

type LayoutProps = {
  children: React.ReactNode
  menus?: Record<string, DrupalMenuLinkContent[]>
  brandBar?: Record<string, BrandBarLinkCollection>
  brandFooter?: BrandFooterLinkCollection
};

export function Layout({ menus, brandBar, brandFooter, children }: LayoutProps) {
  const { header, footer } = menus ?? {};
  return (
    <ThemeProvider parser={RichTextDrupalParser}>
      <PreviewAlert />
      <BrandBar
        ctaItemsCollection={brandBar?.ctaItemsCollection?.items}
        flyOutMenuNavItemsCollection={brandBar?.flyOutMenuNavItemsCollection?.items}
        flyOutMenuPopularLinksItemsCollection={brandBar?.flyOutMenuPopularLinksItemsCollection?.items}
      />
      <MainMenu data={header} />
      {children}
      <Flex variant="col">
        <Footer data={footer} />
        <BrandFooter linkItems={brandFooter?.linkItemsCollection?.items ?? []}/>
      </Flex>
      {/* Only render the GA component if the GA ID is defined. */}
      {googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
    </ThemeProvider>
  )
}
