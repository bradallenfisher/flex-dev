/** @jsx jsx */
/* eslint-disable no-undef */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import vector from './assets/vector.png';
import arrowNittany from './assets/arrow-nittany.svg';
import arrowWhite from './assets/arrow-white.svg';
import { Body, Card, Heading, Link } from '@psu-flex/psu-global-ui';
import { Flex, Grid } from '@psu-flex/psu-global-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import Image from 'next/image';
import { useState } from 'react';

interface ICard {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface GroupedLinksProps {
  cards: ICard[];
}

export const GroupedLinks = ({ cards }: GroupedLinksProps) => {
  const { isSm, isMd, isLg } = useBreakpoints();
  const [currentCard, setCurrentCard] = useState<ICard>(cards[0]);

  const renderCard = (card: ICard): JSX.Element => {
    const { title, description, link } = card;

    const isCurrent = currentCard.id === card.id;

    return (
      <Flex
        onMouseEnter={() => setCurrentCard(card)}
        key={card.id}
        extraSx={{
          width: '90%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: `${
            isCurrent && !isMd && !isSm ? 'nittanyNavy' : 'white'
          }`,
          padding: '20px',
        }}
      >
        <Card
          className="h-full"
          extraSx={{
            paddingLeft: '0',
            paddingRight: '0',
            margin: 'auto',
            width: '100%',
          }}
          square
        >
          <Flex gap={0} alignItems="left" variant="col">
            <Flex
              extraSx={{
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <Heading
                align="left"
                extraSx={{
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  lineHeight: '120%',
                  color: `${
                    isCurrent && !isMd && !isSm ? 'white' : 'nittanyNavy'
                  }`,
                  marginBottom: '.68rem',
                  fontSize: '2rem !important',
                }}
                tag="h1"
                responsiveType="column"
              >
                {title}
              </Heading>
              <Image
                width={50}
                height={20}
                src={isCurrent && !isMd && !isSm ? arrowWhite : arrowNittany}
                alt="Jump Link Arrow"
              />
            </Flex>
            <Body
              align="left"
              variant={18}
              extraSx={{
                display: '-webkit-box',
                webkitBoxOrient: 'vertical',
                webkitLineClamp: 4,
                textOverflow: 'ellipsis',
                fontFamily: 'Roboto',
                fontWeight: '400',
                lineHeight: '150%',
                color: `${
                  isCurrent && !isMd && !isSm ? 'white' : 'nittanyNavy'
                }`,
              }}
            >
              {description}
            </Body>
            {link?.text && link?.url && (
              <Link
                to={link.url}
                extraSx={{
                  color: `${
                    isCurrent && !isMd && !isSm ? 'linkLight' : 'link'
                  }`,
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '150%',
                  fontSize: '18px',
                  mt: '10px',
                  textDecorationLine: 'underline',
                }}
              >
                {link.text}
              </Link>
            )}
          </Flex>
        </Card>
      </Flex>
    );
  };

  return (
    <Flex
      extraSx={{
        flexDirection: `${isSm || isMd ? 'column' : 'row'} `,
        margin: '50px 0',
        paddingTop: '50px',
        backgroundColor: 'white',
      }}
    >
      <Flex
        extraSx={{
          flexDirection: 'column',
          width: `${isSm || isMd ? '95%' : '50%'} `,
          alignItems: 'center',
        }}
      >
        {cards.map((card: ICard) => renderCard(card))}
      </Flex>
      {!isSm && !isMd && (
        <Grid
          extraSx={{
            width: '50%',
            gridTemplateColumns: ['repeat(12, 1fr)'],
            gridTemplateRows: ['repeat(12, 1fr)'],
          }}
        >
          <Image
            src={currentCard.image}
            alt="Grouped Links"
            width={10}
            height={10}
            sizes="100%"
            sx={{
              width: '100%',
              height: 'auto',
              gridColumn: '1/11',
              gridRow: '1/10',
              zIndex: 1000,
            }}
          />
          <div
            sx={{
              backgroundColor: 'slateMaxLight',
              backgroundImage: `url(${vector?.src ?? vector})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              gridColumn: '3/12',
              gridRow: `${isLg ? '4/13' : '6/12'}`,
            }}
          />
        </Grid>
      )}
    </Flex>
  );
};
