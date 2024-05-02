/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { CtaButton, Flex, Heading, useBreakpoints } from '@psu-flex/core-ui';
import { PersonCard, PersonCardProps } from '@psu-flex/psu-global-ui';
import arrow from './assets/arrow-beaver-blue.svg';
import expandMore from './assets/expand-more.svg';
import expandLess from './assets/expand-less.svg';
import Link from 'next/link';

export interface PersonDirectoryCard extends PersonCardProps {
  directoryGroup: string;
  directorySubgroup: string;
}

export interface PersonCardGroupProps {
  items: Array<PersonDirectoryCard>;
}

interface MemoProps {
  item: PersonDirectoryCard;
  isSm: boolean;
  isMd: boolean;
  is2xl: boolean;
  isLg: boolean;
  isXl: boolean;
}

const PersonCardMemo: React.FC<MemoProps> = React.memo(function PersonCardMemo({
  item,
  isSm,
  isMd,
  is2xl,
  isLg,
  isXl,
}) {
  return (
    <PersonCard
      key={item.personEmail}
      {...item}
      containerClassname={{
        flexBasis: `${
          isSm || isMd
            ? '100%'
            : is2xl
            ? 'calc(33% - 1.25rem)'
            : isLg || isXl
            ? 'calc(50% - 1rem)'
            : 'auto'
        }`,
        marginTop: '1rem',
      }}
    />
  );
});

export const PersonCardGroup = ({ items, ...props }: PersonCardGroupProps) => {
  const { isSm, isMd, isLg, isXl, is2xl } = useBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [currentHoveredMenuItem, setCurrentHoveredMenuItem] = useState('');

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-expect-error href does exist on currentTarge property
    const href = e.currentTarget.href;
    const targetId = decodeURI(href.replace(/.*\#/, ''));
    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const mappedItems = useMemo(
    () =>
      items.reduce((acc: any, curr: PersonDirectoryCard) => {
        if (acc[curr.directoryGroup]) {
          acc[curr.directoryGroup] = {
            ...acc[curr.directoryGroup],
            [curr.directorySubgroup]: [
              ...(acc[curr.directoryGroup][curr.directorySubgroup] || []),
              curr,
            ],
          };
        } else {
          acc[curr.directoryGroup] = {
            [curr.directorySubgroup]: [curr],
          };
        }

        return acc;
      }, {}),
    [items]
  );

  return (
    <Flex
      extraSx={{
        flexDirection: `${isSm || isMd || isLg ? 'column' : 'row'}`,
        padding: ['24px', '48px', '48px', '48px'],
        backgroundColor: 'white',
        scrollBehavior: 'smooth',
      }}
    >
      <Flex
        extraSx={{
          flexBasis: '25%',
          position: 'sticky',
          top: 0,
          flexWrap: 'wrap',
          height: '30%',
          padding: `${isSm || isMd || isLg ? '1rem' : '0rem'}`,
        }}
      >
        <Flex
          extraSx={{
            justifyContent: 'space-between',

            flexBasis: '100%',
            marginRight: `${isSm || isMd || isLg ? 'auto' : '50px'}`,
            padding: `${
              isSm || isMd || isLg ? '1rem' : '.5rem 0rem 0rem .5rem'
            }`,

            backgroundColor: `${isSm || isMd || isLg ? 'skyLight' : 'inherit'}`,
          }}
        >
          <Heading
            tag="h5"
            extraSx={{
              fontWeight: '700',
              lineHeight: '150%',
              width: '100%',
              color: 'beaverBlue',
              fontSize: '1.125rem !important',
            }}
          >
            On This Page
          </Heading>

          {isSm || isMd || isLg ? (
            <CtaButton
              size="xs"
              variant="skyLightFilled"
              hocId="jump-link-arrow"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <Image
                width={24}
                height={24}
                src={isMenuOpen ? expandLess : expandMore}
                alt={`${isMenuOpen ? 'Expand Less' : 'Expand More'}`}
              />
            </CtaButton>
          ) : (
            <Image width={24} height={24} src={arrow} alt="Jump Link Arrow" />
          )}
        </Flex>

        {(isSm || isMd || isLg || isXl) && isMenuOpen && (
          <Flex
            {...props}
            extraSx={{
              flexBasis: '100%',
              backgroundColor: `${
                isSm || isMd || isLg ? 'slateMaxLight' : 'inherit'
              }`,
              flexWrap: 'wrap',
              padding: `${
                isSm || isMd || isLg ? '1rem' : '1rem 0rem 0rem 0rem'
              }`,
            }}
          >
            {Object.keys(mappedItems).map((key) => (
              <Flex
                onMouseOver={() => setCurrentHoveredMenuItem(key)}
                onMouseLeave={() => setCurrentHoveredMenuItem('')}
                extraSx={{
                  flexWrap: 'wrap',
                  flexBasis: '90%',
                  padding: `${isSm || isMd || isLg ? '0.25rem' : '0.344rem'}`,
                  background: `${
                    currentHoveredMenuItem === key && isXl
                      ? 'slateLight'
                      : 'inherit'
                  }`,
                }}
              >
                <p
                  sx={{
                    flexBasis: '100%',
                    color: 'beaverBlue',
                    fontSize: '.75rem',
                    fontWeight: '700',
                    lineHeight: '150%',
                    opacity: `${
                      currentHoveredMenuItem === key || isSm || isMd || isLg
                        ? 1
                        : 0
                    }`,
                  }}
                >
                  Jump to
                </p>

                <Link
                  href={`#${key}`}
                  onClick={(e) => handleScroll(e)}
                  sx={{
                    flexBasis: '100%',
                    color: 'link',
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: '150%',
                    textDecoration: `${
                      currentHoveredMenuItem === key && isXl
                        ? 'underline'
                        : 'none'
                    }`,
                  }}
                >
                  {key}
                </Link>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
      <Flex
        {...props}
        extraSx={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          gap: '1.5rem',
          alignSelf: 'stretch',
          flexWrap: 'wrap',
          marginTop: '1rem',
          marginBottom: '2rem',
          flexBasis: '80%',
        }}
      >
        {Object.keys(mappedItems).map((key) => (
          <div id={key}>
            <Heading
              tag="h1"
              extraSx={{
                fontWeight: '700',
                lineHeight: '120%',
                width: '100%',
                color: 'nittanyNavy',
                fontFamily: 'Roboto',
                marginBottom: '0.875rem',
                fontSize: `${
                  isSm || isMd ? '2.25rem' : isLg ? '2.5rem' : '3rem'
                } !important`,
              }}
            >
              {key}
            </Heading>
            {Object.keys(mappedItems[key]).map((subkey) => (
              <>
                <Heading
                  tag="h3"
                  extraSx={{
                    fontWeight: '700',
                    lineHeight: '120%',
                    marginTop: '0.875rem',
                    marginBottom: '0.875rem',
                    width: '100%',
                    color: 'nittanyNavy',
                    fontSize: `${
                      isSm || isMd ? '1.5rem' : isLg ? '1.75rem' : '2rem'
                    } !important`,
                  }}
                >
                  {subkey}
                </Heading>
                <Flex
                  extraSx={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: `${isSm || isMd ? 'center' : 'flex-start'}`,
                    alignItems: `${isSm || isMd ? 'center' : 'flex-start'}`,
                    gap: `${isSm || isMd ? '1rem' : isLg ? '1rem' : '1.25rem'}`,
                    flexWrap: 'wrap',
                    marginBottom: '1.75rem',
                  }}
                >
                  {mappedItems[key][subkey].map((item: PersonDirectoryCard) => (
                    <PersonCardMemo
                      item={item}
                      isSm={isSm}
                      isMd={isMd}
                      is2xl={is2xl}
                      isLg={isLg}
                      isXl={isXl}
                    />
                  ))}
                </Flex>
              </>
            ))}
          </div>
        ))}
      </Flex>
    </Flex>
  );
};
