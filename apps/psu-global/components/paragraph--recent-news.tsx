'use client';
import { useEffect, useState } from 'react';
import { DrupalParagraph } from "next-drupal"
import { NewsCardGroup } from "@psu-flex/psu-global-ui"

export interface ParagraphRecentNewsProps extends DrupalParagraph {
  field_title?: string;
}

export function ParagraphRecentNews({ field_title }: ParagraphRecentNewsProps) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('/api/recent-news')
      .then(response => response.json())
      .then(setCards)
      .catch(console.error);
  }, []);
  return (
    <NewsCardGroup
      columnSpan={1}
      cards={cards.slice(0, 8)}
      buttonLabel="View All News"
      buttonTo="/news"
      groupHeading={field_title}
    />
  )
}
