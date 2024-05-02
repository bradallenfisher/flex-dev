import { FlexHeader } from '@psu-flex/psu-global-ui'
import { DrupalMenuLinkContent } from 'next-drupal';
import { useRouter } from 'next/router'

type FlexMenuItem = {
  title: string
  href: string
  linkItemsCollection?: FlexMenuItem[]
}

type MainMenuProps = {
  data: DrupalMenuLinkContent[]
}

const regularHeaderCtaItemsCollection: FlexMenuItem[] = [
  {
    title: 'Log in to MyPennState',
    href: 'https://mypennstate.psu.edu/'
  }
];

const formatMenuLink = ({ parent, title, url, items }: DrupalMenuLinkContent): FlexMenuItem => {
  const menuLink: FlexMenuItem = { title, href: url };
  if (!menuLink.href && !items?.length) {
    menuLink.href = '#';
  }
  if (items?.length && !parent) {
    menuLink.linkItemsCollection = items.map(formatMenuLink)
  }
  return menuLink
}

export const MainMenu = ({ data = [] }: MainMenuProps) => {
  const navItemsCollection = data.map(formatMenuLink);
  const router = useRouter();
  return (
    <FlexHeader
      ctaItemsCollection={regularHeaderCtaItemsCollection}
      navItemsCollection={navItemsCollection}
      tierTwoEntity={{
        title: 'Global',
        href: `/${router.basePath}`,
      }}
    />
  )
}
