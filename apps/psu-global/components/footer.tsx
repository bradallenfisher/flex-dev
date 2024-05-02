import React from 'react'
import { Footer as FooterComponent } from "@psu-flex/psu-global-ui"
import logo from "@psu-flex/core-ui/assets/images/psu-mark.png"
import { DrupalMenuLinkContent } from 'next-drupal'

type MenuLink = {
  id: number
  name: string
  href: string
}
type Menu = { [k: string]: MenuLink[] }
type FooterMenuProps = { data: DrupalMenuLinkContent[] }

export const Footer = ({ data = [] }: FooterMenuProps) => {
  const links: MenuLink[] = data.map(({ title: name, url: href }, id) => ({ name, href, id }))
  const splitLength = Math.ceil(links.length / 2);
  const footerMenu: Menu = {
    options1: links.slice(0, splitLength),
    options2: links.slice(splitLength),
  }
  return (
    <FooterComponent {...footerMenu} imageSrc={logo?.src ?? logo ?? undefined}/>
  )
}
