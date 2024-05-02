import { DrupalMenuLinkContent } from "next-drupal";
import { drupal } from "./drupal";

export function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(input: string) {
  return /^https?:\/\//.test(input) ? input : `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`
}

export function relativeUrl(input: string) {
  return /^https?:\/\//.test(input) ? (new URL(input)).pathname : input
}

export function getLink(linkField: Record<string, string>): string | undefined {
  if (linkField?.url) {
    return linkField.url;
  }
  if (linkField?.uri) {
    return linkField.uri.replace(/^[^:]+:/, '/')
  }
  return undefined;
}

export const getCanonical = (item: Record<string, any>): string | undefined => {
  const metatag = item?.metatag ?? [];
  const linkMetatag = metatag.find((item: any) => item?.tag === 'link' && item?.attributes?.rel === 'canonical') ?? {}
  if (linkMetatag?.attributes?.href) {
    return relativeUrl(linkMetatag.attributes.href);
  }
  return undefined;
}

export const setImgSrc = (uri: string = ''): string | undefined =>
  uri ? absoluteUrl(uri) : undefined;

export const getEntityPath = (item: Record<string, any>): string | undefined =>
  item?.path?.alias || getCanonical(item);

export const getMenuByName = async (menuName: string): Promise<DrupalMenuLinkContent[]> => {
  const { tree } = await drupal.getMenu<DrupalMenuLinkContent>(menuName, {
    params: {
      'fields[menu_link_content--menu_link_content]': 'enabled,items,meta,parent,title,url',
      'filter[enabled]': true,
    },
  });
  return tree;
};
