/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { Item } from 'react-stately';
import {
  CtaButton,
  Link,
  ListBox,
  Icon,
  RichTextContent,
  Grid,
  Flex,
  Container,
  Wrapper,
  Heading,
} from '@psu-flex/core-ui';
import { Video } from '@psu-flex/psu-global-ui';
import { useContent } from '@psu-flex/utility-functions';

interface ListItemProps {
  text: string;
  slug: string;
}

export interface LinkFarmItemProps {
  itemHeading: string;
  itemRichTextRawBody: string;
  buttonText?: string;
  buttonTo?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoUrl?: string;
  listData?: ListItemProps[];
  index: number;
  hocId?: string;
}

export const LinkFarmItem = ({
  itemHeading,
  itemRichTextRawBody,
  buttonText,
  buttonTo,
  imageSrc,
  imageAlt,
  videoUrl,
  listData,
  index,
  hocId,
}: LinkFarmItemProps) => {
  const alternatingRow = ['1/6', '8/13'];
  const alternatingReverse = ['7/13', '1/7'];
  const direction = `${alternatingRow[index % alternatingRow.length]}`;
  const oppositeDirection = `${
    alternatingReverse[index % alternatingReverse.length]
  }`;
  const videoRef: any = useRef(null);

  return (
    <Grid
      extraSx={{
        rowGap: 6,
      }}
    >
      {videoUrl && (
        <Flex
          extraSx={{
            gridColumn: [
              '1/5',
              '2/8',
              `${oppositeDirection}`,
              `${oppositeDirection}`,
            ],
            gridRow: ['auto', 'auto', '1/2', '1/2'],
          }}
        >
          <Video
            src={videoUrl}
            className="absolute"
            ref={videoRef}
            playing={true}
            autoPlay
            muted
            loop
            playsInline
          />
        </Flex>
      )}
      {imageSrc && (
        <Flex
          gap={16}
          extraSx={{
            gridColumn: [
              '1/5',
              '2/8',
              `${oppositeDirection}`,
              `${oppositeDirection}`,
            ],
            gridRow: ['auto', 'auto', '1/2', '1/2'],
            alignItems: 'flex-start',
          }}
        >
          <img
            alt={imageAlt ? imageAlt : ''}
            className="w-full"
            src={imageSrc}
            sx={{ objectFit: 'contain' }}
          />
        </Flex>
      )}
      <Flex
        direction="column"
        gap={6}
        extraSx={{
          gridColumn: ['1/5', '2/8', `${direction}`, `${direction}`],
          gridRow: ['auto', 'auto', '1/2', '1/2'],
        }}
      >
        <Heading
          className="capitalize"
          tag="h2"
          variant={28}
          extraSx={{ mt: [0, 0, 6, 6] }}
          responsiveType="full"
        >
          {itemHeading}
        </Heading>
        <RichTextContent richTextRaw={itemRichTextRawBody} bodyVariant={22} />
        {buttonText && (
          <CtaButton
            hocId={hocId && hocId}
            endIcon="chevronRight"
            size="sm"
            variant="primaryOutlined"
            to={buttonTo && buttonTo}
          >
            {buttonText}
          </CtaButton>
        )}
        {listData && (
          <ListBox gap={3} direction="column" items={listData}>
            {(item: ListItemProps) => (
              <Item key={item.text}>
                <Link
                  aria-label={item.text + ' link'}
                  className="flex items-center capitalize"
                  to={item.slug}
                  variant={22}
                  id={hocId && hocId}
                >
                  {item.text}
                  <Icon
                    className="flex"
                    extraSx={{ ml: 2 }}
                    size={16}
                    color="link"
                    icon="chevronRight"
                  />
                </Link>
              </Item>
            )}
          </ListBox>
        )}
      </Flex>
    </Grid>
  );
};

export interface LinkFarmProps {
  data: LinkFarmItemProps[];
}

export const LinkFarm = ({ data, ...props }: LinkFarmProps) => {
  const contentProps = useContent(props);
  return (
    <Container {...contentProps}>
      <Wrapper>
        <Flex gap={[10, 15, 20, 25]} direction="column">
          {data?.map((item, index) => (
            <LinkFarmItem
              hocId={contentProps && contentProps.id}
              key={index}
              index={index}
              itemHeading={item.itemHeading}
              itemRichTextRawBody={item.itemRichTextRawBody}
              buttonText={item.buttonText}
              buttonTo={item.buttonTo}
              videoUrl={item.videoUrl}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              listData={item.listData}
            />
          ))}
        </Flex>
      </Wrapper>
    </Container>
  );
};
