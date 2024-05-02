/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useEffect, useRef, useState } from 'react';
import { Flex } from '../../../base-components/layout';
import { Heading, Icon } from '../../../base-components/data-display';
import { Link } from '../../../base-components/navigation';
import { useEscapeKey } from '@psu-flex/utility-hooks';
import { useToggle, useBreakpoints } from '@psu-flex/utility-hooks';
import { cardSx, dropDownSx, headingSx, linkSx } from './SidebarNavStyles';
import { SidebarNavProps } from './SidebarTypes';

export const SidebarNav = ({
  heading,
  items,
  currentSlug,
  sticky = false,
}: SidebarNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useToggle(false);
  useEscapeKey(() => setIsMobileMenuOpen(false));
  const { isXl } = useBreakpoints();
  const MobileDropdownButton = () => {
    return (
      <Flex
        className="hidden-above-lg"
        extraSx={{
          bg: 'linkLight',
          py: 3,
          px: 5,
        }}
        onClick={setIsMobileMenuOpen}
        role="button"
      >
        <Heading
          variant={18}
          className="uppercase"
          color="coalyGray"
          extraSx={{ fontFamily: 'condensed', fontWeight: 'bold' }}
        >
          In This Section
        </Heading>
        <Icon
          color="coalyGray"
          className="ml-auto my-auto"
          size={20}
          icon="expand"
          extraSx={{
            '& > svg': {
              transition: 'transform ease .4s',
              transform: isMobileMenuOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
            },
          }}
        />
      </Flex>
    );
  };

  const SidebarSubList = ({ item, openKey, index, ...props }) => {
    const contentEl = useRef(null);
    const [height, setHeight] = useState();
    useEffect(() => {
      setHeight(contentEl.current && contentEl.current.scrollHeight);
    }, [openKey]);
    return (
      <>
        {item.items && (
          <ul
            className="overflow-hidden list-none flex-col"
            ref={contentEl}
            sx={{
              gap: [4, 4, 4, 4],
              transition: 'height smooth 0.2s',
              ...props.extraSx,
              ...(openKey && openKey === index
                ? {
                    //@ts-ignore
                    height: height,
                    visibility: 'visible',
                  }
                : {
                    height: '0px',
                    visibility: 'hidden',
                  }),
            }}
          >
            {item.to && !isXl && (
              <li
                className="flex"
                sx={{
                  '&:last-of-type': {
                    pb: [5, 5, 4, 5],
                  },
                  '&:first-of-type': {
                    pt: [2, 2, 4, 4],
                  },
                }}
                key={index}
              >
                <Link
                  underline={'none'}
                  extraSx={{
                    fontSize: 18,
                    pl: [3, 3, 4, 4],
                    pr: [0, 0, 4, 4],
                    fontFamily: 'condensed',
                    color: 'coalyGray',
                    fontWeight: 'regular',
                    '&:hover': {
                      color: 'link',
                    },
                  }}
                  to={item.to}
                >
                  {item.title}
                </Link>
              </li>
            )}
            {item.items.map((subItem, index) => (
              <li
                className="flex"
                sx={{
                  '&:last-of-type': {
                    pb: [5, 5, 0, 0],
                  },
                  '&:first-of-type': {
                    pt: [2, 2, 4, 4],
                  },
                }}
                key={index}
              >
                <Link
                  underline="none"
                  extraSx={{
                    fontSize: 18,
                    pl: [3, 3, 4, 4],
                    pr: [0, 0, 4, 4],
                    fontFamily: 'condensed',
                    color: 'coalyGray',
                    '&:hover': {
                      color: 'link',
                    },
                  }}
                  to={subItem.to}
                >
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  const SidebarListItemDropdownButton = ({
    item,
    index,
    handleToggle,
    openKey,
  }) => {
    return (
      <Flex
        onClick={!isXl ? () => handleToggle(index) : undefined}
        alignItems="center"
        justifyContent="space-between"
      >
        {isXl ? (
          <Link
            underline={'none'}
            color={'coalyGray'}
            extraSx={{
              ...linkSx(item, currentSlug),
              fontSize: 18,
            }}
            to={currentSlug === item.to ? null : item.to}
          >
            {item.title}
          </Link>
        ) : (
          <span
            sx={{
              color: 'coalyGray',
              ...linkSx(item, currentSlug),
              fontSize: 18,
            }}
          >
            {item.title}
          </span>
        )}

        <div
          sx={{ pl: [5, 5, 4, 4], pr: [0, 0, 2, 2] }}
          className="pointer"
          onClick={isXl ? () => handleToggle(index) : undefined}
        >
          <Icon
            className="flex"
            size={20}
            color="coalyGray"
            icon="expand"
            extraSx={{
              '& > svg': {
                transition: 'all ease .4s',
                transform:
                  openKey === index ? 'rotate(180deg)' : 'rotate(0deg)',
              },
              '&:hover > svg > path': {
                fill: 'link',
              },
            }}
          />
        </div>
      </Flex>
    );
  };

  const SidebarList = () => {
    const defaultOpenKey = items.findIndex((item) => item.to === currentSlug);

    const [openKey, setOpenKey] = useState<number | undefined>(
      defaultOpenKey !== -1 ? defaultOpenKey : undefined
    );

    const handleToggle = (key: number): void => {
      //open clicked MobileMenuListItem by key
      setOpenKey(openKey !== key ? key : undefined);
    };

    return (
      <ul
        className="w-full list-none"
        sx={{
          pb: [3, 3, 0, 0],
        }}
      >
        {items.map((item, index) => (
          <li
            sx={{
              pb: [0, 0, 4, 4],
            }}
          >
            {item.to ? (
              <>
                {!item.items ? (
                  <Link
                    underline={'none'}
                    color={'coalyGray'}
                    extraSx={{
                      ...linkSx(item, currentSlug),
                      fontSize: 18,
                      pr: 9,
                    }}
                    to={currentSlug === item.to ? null : item.to}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <SidebarListItemDropdownButton
                      handleToggle={handleToggle}
                      index={index}
                      openKey={openKey}
                      item={item}
                    />
                    <SidebarSubList
                      item={item}
                      index={index}
                      openKey={openKey}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <SidebarListItemDropdownButton
                  handleToggle={handleToggle}
                  index={index}
                  openKey={openKey}
                  item={item}
                />
                <SidebarSubList item={item} index={index} openKey={openKey} />
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Flex
      direction="column"
      extraSx={{
        gridColumn: ['1/5', '2/8', '1/5', '1/4'],
        mb: [8, 10, 0, 0],
        top: 0,
      }}
    >
      <MobileDropdownButton />
      <div
        sx={{
          position: sticky ? 'sticky' : 'unset',
          top: '96px',
          ...cardSx,
          display: [
            !isMobileMenuOpen ? 'none' : 'block',
            !isMobileMenuOpen ? 'none' : 'block',
            'block',
            'block',
          ],
        }}
      >
        <Heading
          className="uppercase"
          color="nittanyNavy"
          tag="h2"
          extraSx={{
            fontSize: 20,
            fontFamily: 'condensed',
            ...headingSx,
          }}
        >
          {heading}
        </Heading>
        <SidebarList />
      </div>
    </Flex>
  );
};
