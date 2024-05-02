/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeUICSSObject } from 'theme-ui';
import { Flex } from '@psu-flex/core-ui';
import { Heading, Icon, Body, Card, Link } from '@psu-flex/core-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';

export interface CareerListingCardProps {
  id: number;
  itemHeading: string;
  itemLocation: string;
  itemType: string;
  itemBody: string;
  itemTo: string;
  itemToBody: string;
}

export const CareerListingCard = ({
  itemHeading,
  itemLocation,
  itemType,
  itemBody,
  itemTo,
  itemToBody,
}: CareerListingCardProps) => {
  const cardHoverSx: ThemeUICSSObject = {
    '&:hover > div > h1': {
      textDecoration: 'underline',
    },
  };
  const { isSm } = useBreakpoints();

  return (
    <Flex
      extraSx={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'var(--4x, 1rem)',
        flexBasis: '100%',
      }}
    >
      <Card
        className="h-full"
        extraSx={{
          ...cardHoverSx,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: '0',
          paddingRight: '0',
          maxWidth: '800px',
        }}
        to={itemTo}
        square
      >
        <Flex gap={0} alignItems="flex-start" wrap={true} variant="col">
          <Heading
            align="left"
            extraSx={{
              fontFamily: 'Roboto',
              fontSize: `${isSm ? '1.375rem' : '1.75rem'}`,
              fontWeight: '700',
              lineHeight: '120%',
            }}
            tag="h1"
            responsiveType="column"
          >
            {itemHeading}
          </Heading>
          <Flex
            extraSx={{
              justifyContent: 'flex-start',
              width: '70%',
              marginLeft: '0px',
            }}
          >
            <Flex
              extraSx={{
                alignItems: 'center',
                gap: 'var(--1x, 0.25rem)',
                borderRadius: 'var(--1x, 0.25rem)',
                mt: 2,
                mr: 2,
              }}
            >
              {!isSm && (
                <Icon size={24} color="beaverBlue" icon={'locationPin'} />
              )}
              <Body
                align="left"
                color="beaverBlue"
                variant={16}
                extraSx={{
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '120%',
                }}
              >
                {itemLocation}
              </Body>
            </Flex>
            <Flex
              extraSx={{
                alignItems: 'center',
                gap: 'var(--1x, 0.25rem)',
                borderRadius: 'var(--1x, 0.25rem)',
                mt: 2,
                width: '50%',
              }}
            >
              {!isSm && <Icon size={24} color="beaverBlue" icon={'person'} />}
              <Body
                align="left"
                color="beaverBlue"
                variant={16}
                extraSx={{
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '120%',
                }}
              >
                {itemType.charAt(0).toUpperCase() + itemType.slice(1)}
              </Body>
            </Flex>
          </Flex>
          <Body
            align="left"
            variant={16}
            extraSx={{
              display: '-webkit-box',
              webkitBoxOrient: 'vertical',
              webkitLineClamp: 4,
              textOverflow: 'ellipsis',
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '150%',
              mt: 2,
            }}
          >
            {itemBody}
          </Body>
        </Flex>
        <Flex
          extraSx={{
            alignItems: 'center',
            gap: 'var(--1x, 0.25rem)',
            mt: '1rem',
          }}
        >
          <Link
            to={itemTo}
            extraSx={{
              textDecoration: 'underline',
              fontSize: `${isSm ? '1rem' : '1.25rem'}`,
            }}
          >
            {itemToBody}
          </Link>
          <Icon size={16} color="link" icon={'linkOut'} />
        </Flex>
      </Card>
    </Flex>
  );
};
