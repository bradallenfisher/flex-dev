import { DrupalParagraph } from "next-drupal"
import { BackgroundWrapper, StatsList } from "@psu-flex/psu-global-ui"

export interface ParagraphStatsItemProps extends DrupalParagraph {
  field_text: string
  field_title: string
}
export interface ParagraphStatsListProps extends DrupalParagraph {
  field_components: ParagraphStatsItemProps[]
  field_title: string
  body?: {
    value: string
  }
  field_link?: {
    uri: string
    title: string
  }
}

export function ParagraphStatsList(paragraph: ParagraphStatsListProps) {
  const cards = paragraph.field_components.map((card, index) => ({
    title: card.field_title,
    description: card.field_text,
    id: index,
  }))
  const link = {
    text: paragraph?.field_link?.title ?? '',
    url: paragraph?.field_link?.uri ?? '',
  }

  const title = paragraph.field_title
  const description = paragraph?.body?.value ?? undefined;
  return (
    <BackgroundWrapper variant="nittanyNavy" hasFixedHeight={true}>
      <StatsList
        cards={cards}
        link={link}
        title={title}
        description={description}
      />
    </BackgroundWrapper>
  )
}
