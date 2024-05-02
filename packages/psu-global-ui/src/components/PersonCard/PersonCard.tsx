/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@psu-flex/core-ui';
import { Heading, Icon, Body, Card, Link } from '@psu-flex/core-ui';
import Image from 'next/image';
import maleAvatar from './assets/male-avatar.svg';
import femaleAvatar from './assets/female-avatar.svg';

export interface PersonCardProps {
  personImage?: string;
  personIsMale?: boolean;
  personHeading: string;
  personBody: string;
  personTo: string;
  personPosition?: string;
  personLocation?: string;
  personCellphone?: string;
  personEmail: string;
  containerClassname?: { [key: string]: any };
}

export const PersonCard = ({
  personImage,
  personIsMale,
  personHeading,
  personBody,
  personTo,
  personPosition,
  personLocation,
  personCellphone,
  personEmail,
  containerClassname = {},
}: PersonCardProps) => {
  const cardHoverSx = {
    '&:hover': {
      borderBottom: 'solid .25rem',
      borderColor: 'beaverBlue',
    },
  };

  const formatCellphone = (cellphone: string) =>
    cellphone.replace(/[^\w\s]/gi, '');

  const iconBodyProps = {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '150%',
  };

  const iconProps = {
    width: 'var(--6x, 1.5rem)',
    height: 'var(--6x, 1.5rem)',
  };

  return (
    <div
      sx={{
        display: 'flex',
        minWidth: '18.75rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'var(--4x, 1rem)',
        ...containerClassname,
      }}
    >
      <Card
        className="h-full"
        extraSx={{
          ...cardHoverSx,
          paddingLeft: '0',
          paddingRight: '0',
        }}
        to={personTo}
        square
      >
        <div className="aspect3-2">
          <Image
            width={10}
            unoptimized={true}
            height={10}
            src={
              personImage
                ? personImage
                : personIsMale
                ? maleAvatar
                : femaleAvatar
            }
            alt={personHeading}
            sx={{ width: '100%', height: '100%' }}
          />
        </div>
        <Flex gap={0} alignItems="left" variant="col">
          <Heading
            align="left"
            extraSx={{
              fontFamily: 'Roboto',
              marginTop: '1rem',
              fontSize: '1.75rem !important',
              fontWeight: '700',
              lineHeight: '120%',
              color: 'link',
            }}
            tag="h1"
            responsiveType="column"
          >
            {personHeading}
          </Heading>
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
              paddingTop: '0.5rem',
            }}
          >
            {personBody}
          </Body>
        </Flex>
        {personPosition && (
          <Flex
            extraSx={{
              alignItems: 'flex-start',
              gap: 'var(--1x, 0.25rem)',
              borderRadius: 'var(--1x, 0.25rem)',
              mt: `${personBody ? '1rem' : '0rem'}`,
            }}
          >
            <Icon
              size={24}
              extraSx={iconProps}
              color="beaverBlue"
              icon={'avatar'}
            />
            <Body
              align="left"
              color="beaverBlue"
              variant={16}
              extraSx={iconBodyProps}
            >
              {personPosition}
            </Body>
          </Flex>
        )}
        {personLocation && (
          <Flex
            extraSx={{
              alignItems: 'center',
              gap: 'var(--1x, 0.25rem)',
              mt: `${personPosition ? '1rem' : '0rem'}`,
            }}
          >
            <Icon
              size={24}
              extraSx={iconProps}
              color="beaverBlue"
              icon={'locationPin'}
            />
            <Body
              align="left"
              color="beaverBlue"
              variant={16}
              extraSx={iconBodyProps}
            >
              {personLocation}
            </Body>
          </Flex>
        )}
        {personCellphone && (
          <Flex
            extraSx={{
              alignItems: 'center',
              gap: 'var(--1x, 0.25rem)',
              mt: `${personLocation ? '1rem' : '0rem'}`,
            }}
          >
            <Icon
              size={24}
              extraSx={iconProps}
              color="beaverBlue"
              icon={'cellphone'}
            />
            <Body
              align="left"
              color="beaverBlue"
              variant={16}
              extraSx={{
                ...iconBodyProps,
                textDecoration: 'underline',
              }}
            >
              <Link to={`tel:+1${formatCellphone(personCellphone)}`}>
                {personCellphone}
              </Link>
            </Body>
          </Flex>
        )}
        <Flex
          extraSx={{
            alignItems: 'center',
            gap: 'var(--1x, 0.25rem)',
            mt: `${personCellphone ? '1rem' : '0rem'}`,
          }}
        >
          <Icon
            size={24}
            extraSx={iconProps}
            color="beaverBlue"
            icon={'email'}
          />
          <Body
            align="left"
            color="beaverBlue"
            variant={16}
            extraSx={{
              ...iconBodyProps,
              textDecoration: 'underline',
            }}
          >
            <Link to={`mailto: ${personEmail}`}>{personEmail}</Link>
          </Body>
        </Flex>
      </Card>
    </div>
  );
};
