/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Body, Flex, Heading, Icon, Link } from '@psu-flex/core-ui';
import heroImage from './assets/hero-image.svg';
import { VectorDecorator } from './VectorDecorator';
import { SocialShare } from '../SocialShare/SocialShare';
import Image from 'next/image';

type ExternalLink = {
  label: string;
  url: string;
};

export interface HeroEventDetailProps {
  title: string;
  badges?: string[];
  externalLink?: ExternalLink;
  image?: string;
  eventDate?: string;
  eventTime?: string;
  eventLocation?: string;
  iconButtonData?: any;
}

export const HeroEventDetail = ({
  title,
  badges,
  externalLink,
  image,
  eventDate,
  eventTime,
  eventLocation,
}: HeroEventDetailProps) => (
  <Flex
    direction="column"
    justifyContent="center"
    alignItems="center"
    gap={8}
    extraSx={{
      overflowX: 'hidden',
      padding: 'var(--12x, 3rem) 3.875rem',
      backgroundColor: 'white',
      '@media screen and (max-width: 768px)': {
        padding: 'var(--8x, 2rem) var(--margin-sm, 1.625rem)',
      },
    }}
  >
    <Flex
      extraSx={{
        position: 'absolute',
        right: '0rem',
        top: '17rem',
        '@media screen and (max-width: 1080px)': {
          display: 'none',
        },
      }}
    >
      <svg
        width="227"
        height="370"
        viewBox="0 0 227 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M91 242.479H521.089L541.88 182H111.839L91 242.479Z"
          stroke="#001E44"
          stroke-miterlimit="10"
        />
        <path
          d="M86.7988 323.346H254.33L270.32 276.895H102.788L86.7988 323.346Z"
          stroke="#001E44"
          stroke-miterlimit="10"
        />
        <path
          d="M199.447 222.564H367.603L397.181 136.674H229.026L199.447 222.564Z"
          stroke="#001E44"
          stroke-miterlimit="10"
        />
        <path
          d="M0.945312 368.598H225.617L245.256 311.578H20.5843L0.945312 368.598Z"
          stroke="#001E44"
          stroke-miterlimit="10"
        />
      </svg>
    </Flex>
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={8}
      extraSx={{
        alignSelf: 'stretch',
        padding: '0rem 13rem',
        zIndex: 1,
        position: 'relative',
      }}
    >
      <Flex direction="column" gap={4}>
        <Flex
          justifyContent="center"
          alignItems="center"
          gap={8}
          extraSx={{
            alignSelf: 'stretch',
          }}
        >
          {badges &&
            badges.map((badge) => (
              <Flex
                alignItems="center"
                gap={1}
                extraSx={{
                  padding:
                    'var(--btn-spacing-btn-smallest, 0.25rem) var(--btn-spacing-btn-md, 1rem);',
                  borderRadius: 'var(--circle, 0rem);',
                  border: '1px solid var(--color-nittany-navy, #001E44);',
                }}
              >
                <Body variant={16} color="nittanyNavy">
                  {badge}
                </Body>
              </Flex>
            ))}
        </Flex>
        <Heading
          variant={56}
          color="beaverBlue"
          extraSx={{
            pt: 4,
            width: '24.25rem',
            textAlign: 'center',
            ml: 'auto',
            mr: 'auto',
            fontWeight: '900',
          }}
        >
          {title}
        </Heading>
      </Flex>
      <Flex
        extraSx={{
          mt: 2,
        }}
        direction="column"
      >
        <Flex
          extraSx={{
            alignSelf: 'center',
            justifyContent: 'center',
            mb: 8,
            flexWrap: 'wrap',
            '@media screen and (max-width: 768px)': {
              gap: '1rem var(--4x, 1rem)',
              alignSelf: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            },
          }}
          gap={2}
        >
          <Flex
            gap={2}
            extraSx={{
              alignItems: 'end',
            }}
          >
            <Icon size={24} color="beaverBlue" icon={'calendar'} />
            <Body
              extraSx={{
                fontFamily: 'Roboto',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.0375em',
                textTransform: 'uppercase',
                color: 'beaverBlue',
                gap: 4,
              }}
            >
              Event Date: &nbsp;&nbsp;&nbsp;
              <span
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  fontWeight: '400',
                  color: 'beaverBlue',
                  gap: 4,
                }}
              >
                {eventDate}
              </span>
            </Body>
          </Flex>
          <Flex gap={2}>
            <Body
              extraSx={{
                fontFamily: 'Roboto',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.0375em',
                textTransform: 'uppercase',
                color: 'beaverBlue',
                gap: 4,
                pt: '0.33rem',
              }}
            >
              From: &nbsp;&nbsp;&nbsp;
              <span
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  fontWeight: '400',
                  color: 'beaverBlue',
                  gap: 4,
                }}
              >
                {eventTime}
              </span>
            </Body>
          </Flex>
          {eventLocation && (
            <Flex gap={2}>
              <Body
                extraSx={{
                  fontFamily: 'Roboto',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.0375em',
                  textTransform: 'uppercase',
                  color: 'beaverBlue',
                  gap: 4,
                  pt: '0.33rem',
                }}
              >
                Location: &nbsp;&nbsp;&nbsp;{' '}
                <span
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: 'beaverBlue',
                    gap: 4,
                  }}
                >
                  {eventLocation}
                </span>
              </Body>
            </Flex>
          )}
        </Flex>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
          }}
          src={image ?? heroImage?.src ?? heroImage}
          alt="Image background"
        />
        <Flex
          extraSx={{
            mt: 8,
            alignSelf: 'flex-start',
            gap: 'var(--3x, 0.75rem)',
            borderLeft: '1px solid var(--color-beaver-blue, #1E407C)',
            paddingLeft: 3,
            '@media screen and (max-width: 1080px)': {
              marginLeft: '12px',
            },
          }}
        >
          <Body
            extraSx={{
              gap: '0.75rem',
            }}
          >
            <Link to={externalLink?.url ?? ''}>{externalLink?.label}</Link>
          </Body>
        </Flex>
        <SocialShare
          title="Event"
          size="sm"
          direction="vertical"
          extraSx={{
            position: 'relative',
            right: '-103%',
            top: '-400px',
            marginBottom: '-400px',

            '@media screen and (max-width: 1080px)': {
              flexDirection: 'row',
              top: '20%',
              left: '30%',
              marginBottom: '0px',
            },
            '@media screen and (max-width: 768px)': {
              mt: 4,
              left: '10%',
            },
          }}
        />
        <Flex
          direction="column"
          extraSx={{
            position: 'relative',
            left: '70%',
            '@media screen and (max-width: 1080px)': {
              top: '-180px',
            },
          }}
        >
          <VectorDecorator />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
