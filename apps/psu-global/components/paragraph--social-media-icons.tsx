import { DrupalParagraph, DrupalTaxonomyTerm } from "next-drupal"
import { IconGroup, Wrapper } from "@psu-flex/psu-global-ui"

export interface ParagraphSocialMediaIconProps extends DrupalTaxonomyTerm {
  field_social_media_platform: string
  field_url?: {
    uri: string
  }
}

export interface ParagraphSocialMediaIconsProps extends DrupalParagraph {
  field_social_media_icons: ParagraphSocialMediaIconProps[]
}

export function ParagraphSocialMediaIcons(paragraph: ParagraphSocialMediaIconsProps) {
  const data = paragraph.field_social_media_icons
    .map((social) => ({
      icon: (social?.field_social_media_platform ?? '').replace('linkedin', 'linkedIn'),
      to: social.field_url?.uri,
    }))
    .filter(({ icon, to }) => icon && to);

  return (
    <Wrapper>
      <IconGroup
        gap={2}
        iconButtonVariant="beaverBlue"
        size="md"
        iconGroupData={data}
      />
    </Wrapper>
  )
}
