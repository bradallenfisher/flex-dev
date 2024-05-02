import { DrupalMedia, DrupalParagraph } from 'next-drupal';
import { BackgroundColorVariants, BackgroundWrapper, LinkFarm, LinkFarmItemProps } from '@psu-flex/psu-global-ui';
import { absoluteUrl, getLink } from 'lib/utils';

export interface ParagraphLinkFarmProps extends DrupalParagraph {
  field_title: string;
  field_link: {
    uri: string;
    title: string;
  };
  field_links?: {
    uri: string;
    title: string;
  }[];
  body: {
    value: string;
  };
  field_media: DrupalMedia;
}

export interface ParagraphLinkFarmsProps extends DrupalParagraph {
  field_link_farm_items: ParagraphLinkFarmProps[];
  field_link_farm_color: BackgroundColorVariants
}

export function ParagraphLinkFarm({
  field_link_farm_items: data,
  field_link_farm_color
}: ParagraphLinkFarmsProps) {
  const mapDataToLinkFarmProps: LinkFarmItemProps[] = data.map(
    ({ field_title, body, field_links, field_media, field_link }, index) => ({
      itemHeading: field_title,
      itemRichTextRawBody: body.value,
      listData: field_links?.map(({ uri, title }) => ({
        text: title,
        slug: uri,
      })),
      ...(field_media?.field_image?.uri?.url &&
        (field_media?.field_image?.type === 'file--file' ||
          field_media?.field_image?.type === 'media--image') && {
          imageSrc: absoluteUrl(field_media.field_image.uri.url),
        }),
      ...(field_media?.field_image?.resourceIdObjMeta?.alt && {
        imageAlt: field_media.field_image.resourceIdObjMeta.alt,
      }),
      ...(field_media?.field_source &&
        field_media?.type === 'media--video' && {
          videoUrl: absoluteUrl(field_media?.field_source),
        }),
      ...(field_link?.title && {
        buttonText: field_link.title,
      }),
      ...(field_link && {
        buttonTo: getLink(field_link),
      }),
      index,
    })
  );
  return (
    <BackgroundWrapper variant={field_link_farm_color}>
      <LinkFarm data={mapDataToLinkFarmProps} />
    </BackgroundWrapper>
  );
}
