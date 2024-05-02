import { Grid } from '@psu-flex/core-ui';
import { NewsCardsItem, NewsCardsItemInterface } from './NewsCardItem';

interface NewsCards {
  newsCardsData: NewsCardsItemInterface[];
}

export const NewsCards = ({ newsCardsData }: NewsCards) => {
  return (
    <Grid
      extraSx={{
        rowGap: [6, 4, 5, 7]
      }}
    >
      {newsCardsData?.map((item: NewsCardsItemInterface, index: number) => (
        <NewsCardsItem
          key={index}
          itemHeading={item.itemHeading}
          itemBody={item.itemBody}
          itemImage={item.itemImage}
          imageWidth={item.imageWidth}
          imageHeight={item.imageHeight}
          itemTo={item.itemTo}
          itemDateTitle={item.itemDateTitle}
          itemDatePosted={item.itemDatePosted}
        />
      ))}
    </Grid>
  );
};
