/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  AppBar,
  Icon,
  NavButton,
  MenuButton,
  HeaderMark,
  Drawer,
  FormLabel,
  ListBox,
  SearchButton,
  Link,
  CloseButton,
  SearchCta,
  DefaultTierOne,
  Shield,
} from '@psu-flex/core-ui';
import { Container, Flex, Grid, LinkWrapper, Wrapper } from '@psu-flex/core-ui';
import { theme } from '@psu-flex/core-ui';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useToggle, useBreakpoints } from '@psu-flex/utility-hooks';
import { useButton, useId } from 'react-aria';
import { Item } from 'react-stately';
import { Spaces } from '@psu-flex/core-ui';
const { colors } = theme;

export interface FlexHeaderProps {
  ctaItemsCollection?: any;
  desktopMenuGap?: Spaces[];
  tierThreeDepartment?: {
    title: string;
    href: string;
  };
  navItemsCollection?: any;
  tierTwoEntity?: {
    title: string;
    href: string;
  };
  tierOneMark?: any;
}

/** Description */

function changeBorderColor(el) {
  var elem = document.getElementById(el);
  elem.style.borderColor = `${colors.accent}`;
}
function changeBorderColorBack(el) {
  var elem = document.getElementById(el);
  elem.style.borderColor = 'transparent';
}

export const FlexHeader = ({
  ctaItemsCollection,
  navItemsCollection,
  tierThreeDepartment,
  tierTwoEntity,
  tierOneMark,
  desktopMenuGap = [0, 0, 12, 15],
}: FlexHeaderProps) => {
  const { isLg, isXl, is2xl } = useBreakpoints();
  const [isMobileMenuOpen, toggleIsMobileMenuOpen] = useToggle(false);

  const containerEl: MutableRefObject<any> = useRef<any>();

  const CtaItems = () => {
    return (
      <Flex
        justifyContent="center"
        wrap
        extraSx={{ mt: [12, 12, 1, 1] }}
        gap={isXl ? 3 : 2}
      >
        {ctaItemsCollection?.map((item, i) => {
          return (
            <NavButton
              key={i}
              to={item.href}
              variant={isXl ? 'lightOutlined' : 'linkOutlined'}
            >
              {item.title}
            </NavButton>
          );
        })}
      </Flex>
    );
  };

  const ListItem = ({ openMenu, item, ...props }) => {
    return (
      <li
        className="pointer"
        sx={{
          listStyleType: 'none',
          px: 2,
          py: 1,
          borderRadius: 'xs',
          '&:hover': {
            backgroundColor: 'limestoneLight',
          },
        }}
        {...props}
      >
        <a
          tabIndex={openMenu ? 0 : -1}
          href={item?.href}
          className="w-full"
          sx={{
            color: 'coalyGray',
            variant: 'text.menu.list.18',
          }}
        >
          {item?.title}
        </a>
      </li>
    );
  };

  const DesktopMenus = () => {
    //dynamically adjust menuContainerWidth depending on menu items

    //need to create state object to track open menus for accessibility features
    //init open menu states
    const [openStates, setOpenStates] = useState(
      navItemsCollection.map(() => false)
    );

    //dynamically create refs for all natItems
    const containerRefs = useRef(
      navItemsCollection.map(() => React.createRef())
    );

    //add event listeners for all refs
    useEffect(() => {
      const handleOutsideClick = (event, index) => {
        if (
          containerRefs.current[index] &&
          !containerRefs?.current[index]?.current?.contains(event.target)
        ) {
          // Clicked outside the container, reset the state variable for the specific item
          setOpenStates((prevOpenStates) =>
            prevOpenStates.map((state, i) => (i === index ? false : state))
          );
        }
      };

      const addEventListeners = () => {
        openStates.forEach((isOpen, index) => {
          if (isOpen) {
            document.addEventListener('mousedown', (event) =>
              handleOutsideClick(event, index)
            );
          }
        });
      };

      addEventListeners();

      // Detach the event listeners when the component unmounts
      return () => {
        openStates.forEach((isOpen, index) => {
          if (isOpen) {
            document.removeEventListener('mousedown', (event) =>
              handleOutsideClick(event, index)
            );
          }
        });
      };
    }, [openStates]);

    //toggles state of single item
    const toggleItem = (index) => {
      setOpenStates((prevOpenStates) =>
        prevOpenStates.map((state, i) => (i === index ? !state : state))
      );
    };

    //reset all states and toggle currently focused
    const handleMenuKeyPress = (event, menuKey) => {
      if (event.key === 'Enter') {
        setOpenStates((prevOpenStates) => prevOpenStates.map(() => false));
        toggleItem(menuKey);
      }
    };

    //resets all states on hover
    const handleResetOpenMenuOnHover = () => {
      setOpenStates((prevOpenStates) => prevOpenStates.map(() => false));
    };

    const menuItemSx = {
      listStyle: 'none',
      color: 'white',
      backgroundColor: 'transparent',
      border: 'none',
      variant: 'text.menu.heading.18',
    };

    const DesktopMenuLink = (item) => {
      return (
        <Link
          to={item?.item?.href}
          tabIndex={0}
          color="white"
          extraSx={{ variant: 'text.menu.heading.18' }}
        >
          {item?.item?.title}
        </Link>
      );
    };

    const DesktopDropdownMenu = ({ navindex, item, lastItem }) => {
      return (
        <div
          className="absolute"
          ref={containerRefs.current[navindex]}
          sx={{
            backgroundColor: 'transparent',
            top: '100%',
            left: '0%',
            // conditionally flip the last menu anchor in order to not cut off content
            ...(lastItem && !is2xl && { right: 0, left: 'auto' }),
            ...(openStates[navindex]
              ? {
                  opacity: 1,
                  pointerEvents: 'auto',
                }
              : { opacity: 0, pointerEvents: 'none' }),
            transform: openStates[navindex] ? 'scale(1)' : 'scale(0.99)',
            transition: 'all 0.15s ease-in-out',
          }}
        >
          <Flex
            className="nowrap"
            variant="col"
            tag="ul"
            gap={1}
            extraSx={{
              borderTop: 'lg',
              borderColor: 'accent',
              borderStyle: 'solid',
              borderBottom: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              pt: 4,
              px: 3,
              pb: 7,
              backgroundColor: 'white',
              boxShadow: 'md-1',
            }}
          >
            {item?.linkItemsCollection?.map((item, i) => {
              return (
                <ListItem
                  openMenu={openStates[navindex]}
                  navindex={navindex}
                  item={item}
                  key={i}
                />
              );
            })}
          </Flex>
        </div>
      );
    };

    return (
      <Container>
        <Wrapper>
          <Grid>
            <Flex
              extraSx={{
                gridColumn: ['1/5', '1/8', '1/13', '1/13'],
              }}
              justifyContent="center"
            >
              <Flex
                justifyContent="center"
                className="w-full"
                id="menu-container"
                gap={desktopMenuGap}
              >
                {navItemsCollection?.map((item, navindex) => {
                  return (
                    <>
                      <div key={navindex}>
                        {!item.megaMenuItemsCollection && (
                          <li
                            sx={{
                              pb: 4,
                              '&:hover > div': {
                                visibility: 'visible',
                                opacity: 1,
                                pointerEvents: 'auto',
                                transform: 'scale(1)',
                              },
                              gap: 2,
                            }}
                            className="flex items-center relative"
                          >
                            {!item?.linkItemsCollection && item?.href ? (
                              <>
                                <DesktopMenuLink item={item} />
                              </>
                            ) : item?.linkItemsCollection && item?.href ? (
                              <>
                                <DesktopMenuLink item={item} />
                                <Icon
                                  className="flex"
                                  size={is2xl ? 16 : 14}
                                  color="white"
                                  icon="expand"
                                />
                                <DesktopDropdownMenu
                                  lastItem={
                                    navItemsCollection?.length === navindex + 1
                                  }
                                  item={item}
                                  navindex={navindex}
                                />
                              </>
                            ) : (
                              <>
                                <span
                                  tabIndex={0}
                                  onKeyDown={(e) =>
                                    handleMenuKeyPress(e, navindex)
                                  }
                                  className="relative"
                                  sx={{ ...menuItemSx }}
                                  onMouseEnter={handleResetOpenMenuOnHover}
                                >
                                  {item.title}
                                </span>
                                <Icon
                                  className="flex"
                                  size={is2xl ? 16 : 14}
                                  color="white"
                                  icon="expand"
                                />
                                <DesktopDropdownMenu
                                  lastItem={
                                    item?.linkItemsCollection?.length ===
                                    navindex - 1
                                  }
                                  item={item}
                                  navindex={navindex}
                                />
                              </>
                            )}
                          </li>
                        )}
                        {item.megaMenuItemsCollection && (
                          <>
                            <Flex
                              gap={2}
                              onMouseEnter={() =>
                                changeBorderColor(
                                  `mega-menu-hover-button-${navindex}`
                                )
                              }
                              onMouseLeave={() =>
                                changeBorderColorBack(
                                  `mega-menu-hover-button-${navindex}`
                                )
                              }
                              id={`mega-menu-hover-button-${navindex}`}
                              extraSx={{
                                pb: 3,
                                px: [0, 0, 2, 3],
                                borderBottom: 'lg',
                                borderStyle: 'solid',
                                borderLeft: '0px',
                                borderRight: '0px',
                                borderTop: '0px',
                                borderColor: 'transparent',
                                transition: 'all 0.25s ease',
                                '&:hover + div': {
                                  visibility: 'visible',
                                  opacity: 1,
                                  pointerEvents: 'auto',
                                  transform: 'scale(1)',
                                },
                              }}
                              className="items-center pointer flex"
                            >
                              {item.href ? (
                                <DesktopMenuLink item={item} />
                              ) : (
                                <span
                                  tabIndex={0}
                                  onKeyDown={(e) =>
                                    handleMenuKeyPress(e, navindex)
                                  }
                                  className="relative"
                                  sx={{ ...menuItemSx }}
                                  onMouseEnter={handleResetOpenMenuOnHover}
                                >
                                  {item.title}
                                </span>
                              )}
                              <Icon
                                size={is2xl ? 16 : 14}
                                color="white"
                                icon="expand"
                              />
                            </Flex>
                            <div
                              onMouseEnter={() =>
                                changeBorderColor(
                                  `mega-menu-hover-button-${navindex}`
                                )
                              }
                              onMouseLeave={() =>
                                changeBorderColorBack(
                                  `mega-menu-hover-button-${navindex}`
                                )
                              }
                              id="mega-menu-card"
                              className="absolute"
                              sx={{
                                width: '100vw',
                                backgroundColor: 'transparent',
                                top: '100%',
                                left: '0%',
                                transform: 'scale(0.99)',
                                opacity: 0,
                                visibility: 'hidden',
                                pointerEvents: 'none',
                                transition: 'all 0.25s ease',
                                '&:hover': {
                                  visibility: 'visible',
                                  opacity: 1,
                                  pointerEvents: 'auto',
                                  transform: 'scale(1)',
                                },
                              }}
                            >
                              <Flex
                                direction="column"
                                gap={1}
                                extraSx={{
                                  width: '100%',
                                  backgroundColor: 'white',
                                  boxShadow: 'md-1',
                                }}
                              >
                                <Container>
                                  <Wrapper>
                                    <Grid
                                      extraSx={{
                                        pt: 7,
                                        pb: 10,
                                      }}
                                    >
                                      {item?.megaMenuItemsCollection?.map(
                                        (item, i) => {
                                          return (
                                            <div
                                              key={i}
                                              sx={{
                                                gridColumn: ['auto / span 3'],
                                              }}
                                            >
                                              <Flex direction="column">
                                                <h4
                                                  className="uppercase"
                                                  sx={{
                                                    color: 'nittanyNavy',
                                                    borderLeft: 'md',
                                                    borderColor: 'accent',
                                                    borderStyle: 'solid',
                                                    borderBottom: '0px',
                                                    borderRight: '0px',
                                                    borderTop: '0px',
                                                    pl: 2,
                                                    py: '2px',
                                                    mb: [0, 0, 3, 4],
                                                    fontFamily: 'condensed',
                                                    fontWeight: 'bold',
                                                    fontSize: 18,
                                                  }}
                                                >
                                                  {item.title}
                                                </h4>
                                                <Flex
                                                  extraSx={{ mx: 3 }}
                                                  gap={'6px' as any}
                                                  direction="column"
                                                  tag="ul"
                                                >
                                                  {item?.linkItemsCollection?.map(
                                                    (item) => {
                                                      return (
                                                        <ListItem
                                                          openMenu={
                                                            openStates[navindex]
                                                          }
                                                          item={item}
                                                          key={i}
                                                        />
                                                      );
                                                    }
                                                  )}
                                                </Flex>
                                              </Flex>
                                            </div>
                                          );
                                        }
                                      )}
                                    </Grid>
                                  </Wrapper>
                                </Container>
                              </Flex>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  );
                })}
              </Flex>
            </Flex>
          </Grid>
        </Wrapper>
      </Container>
    );
  };

  const MobileMenuListLinkItem = ({ item, ...props }) => {
    return (
      <Link
        to={item?.href}
        className="w-full"
        tabIndex={0}
        color="coalyGray"
        extraSx={{
          variant: 'text.menu.list.18',
          py: '2px',
        }}
        {...props}
      >
        {item?.title}
      </Link>
    );
  };

  const MobileMenuListItem = ({
    menuListDataItem,
    handleToggle,
    buttonRef,
    buttonProps,
    open,
    i,
  }) => {
    const contentEl: MutableRefObject<any> = useRef<any>();
    return (
      <div
        {...buttonProps}
        ref={buttonRef}
        key={i}
        className="w-full"
        role="button"
        aria-expanded={open ? true : false}
      >
        <Flex
          onClick={() => {
            handleToggle(i);
          }}
          justifyContent="space-between"
          alignItems="center"
          extraSx={{ py: '2px' }}
        >
          <span
            className="uppercase"
            sx={{
              color: 'nittanyNavy',
              fontSize: 18,
              fontWeight: 'medium',
              fontFamily: 'condensed',
              pr: 5,
            }}
          >
            {menuListDataItem.title}
          </span>

          <Icon
            className="flex"
            size={20}
            color="nittanyNavy"
            icon="expand"
            extraSx={{
              '& > svg': {
                transition: 'all ease .4s',
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              },
            }}
          />
        </Flex>
        <div
          className="overflow-hidden this"
          ref={contentEl}
          sx={{
            transition: 'height smooth 0.2s',
            ...(open && open
              ? {
                  height: contentEl.current && contentEl.current.scrollHeight,
                }
              : { height: '0px' }),
          }}
        >
          <Flex
            tag="ul"
            extraSx={{ mt: 4, mb: 4, ml: 3 }}
            className="no-wrap"
            direction="column"
            gap={4}
          >
            {[
              <li sx={{ pr: 10 }} className="list-none w-full" key={useId()}>
                {/* Append one more item at the beginning of array if
                menuListDataItem title also has an href */}
                {menuListDataItem.href && (
                  <MobileMenuListLinkItem
                    item={{
                      href: menuListDataItem.href,
                      title: menuListDataItem.title,
                    }}
                  />
                )}
              </li>,
              ...menuListDataItem.linkItemsCollection?.map((item) => (
                <li sx={{ pr: 10 }} className="list-none w-full" key={useId()}>
                  <MobileMenuListLinkItem item={item} />
                </li>
              )),
            ]}
          </Flex>
        </div>
      </div>
    );
  };

  const MobileMegaMenuListLinkItem = ({
    menuListDataItem,
    handleToggle,
    buttonRef,
    parentButtonRef,
    buttonProps,
    open,
    i,
  }) => {
    const contentEl: MutableRefObject<any> = useRef<any>();
    return (
      <div
        {...buttonProps}
        ref={buttonRef}
        key={i}
        className="w-full"
        role="button"
        aria-expanded={open ? true : false}
      >
        <Flex
          onClick={() => {
            handleToggle(i);
            parentButtonRef.current.style.height = 'fit-content';
          }}
          justifyContent="space-between"
          alignItems="center"
          extraSx={{ py: '2px' }}
        >
          {menuListDataItem.href ? (
            <Link
              to={menuListDataItem?.href}
              className="w-full"
              tabIndex={0}
              color="coalyGray"
              extraSx={{
                variant: 'text.menu.list.18',
                pr: 10,
              }}
            >
              {menuListDataItem?.title}
            </Link>
          ) : (
            <span
              className="w-full"
              tabIndex={0}
              sx={{
                color: 'coalyGray',
                variant: 'text.menu.list.18',
                pr: 5,
              }}
            >
              {menuListDataItem?.title}
            </span>
          )}

          <Icon
            className="flex"
            size={16}
            color="coalyGray"
            icon="expand"
            extraSx={{
              '& > svg': {
                transition: 'all ease .4s',
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              },
            }}
          />
        </Flex>
        <div
          className="overflow-hidden"
          ref={contentEl}
          sx={{
            transition: 'height smooth 0.2s',
            ...(open && open
              ? {
                  height: contentEl.current && contentEl.current.scrollHeight,
                }
              : { height: '0px' }),
          }}
        >
          <Flex
            tag="ul"
            extraSx={{ mt: 4, mb: '6px', ml: [2, 3, 0, 0] }}
            className="no-wrap"
            direction="column"
            gap={4}
          >
            {[
              <>
                {menuListDataItem.href && (
                  <li
                    sx={{ pr: 10, py: '2px' }}
                    className="list-none w-full"
                    key={useId()}
                  >
                    {/* Append one more item at the beginning of array if
                menuListDataItem title also has an href */}

                    <MobileMenuListLinkItem
                      item={{
                        href: menuListDataItem.href,
                        title: menuListDataItem.title,
                      }}
                    />
                  </li>
                )}
              </>,
              ...menuListDataItem.linkItemsCollection?.map((item) => (
                <li
                  sx={{ pr: 10, py: '2px' }}
                  className="list-none w-full"
                  key={useId()}
                >
                  <MobileMenuListLinkItem item={item} />
                </li>
              )),
            ]}
          </Flex>
        </div>
      </div>
    );
  };

  const MobileMegaMenuListItem = ({
    menuListDataItem,
    handleToggle,
    buttonRef,
    buttonProps,
    open,
    i,
  }) => {
    const contentEl: MutableRefObject<any> = useRef<any>();
    const [mobileMegaMenuOpenKey, setMobileMegaMenuOpenKey] =
      useState<number>();
    const mobileMegaMenuButtonRef: MutableRefObject<any> = useRef<any>();

    const handleToggleMobileMegaMenu = (key: number): void => {
      //open clicked MobileMenuListItem by key
      setMobileMegaMenuOpenKey(mobileMegaMenuOpenKey !== key ? key : undefined);
    };

    return (
      <div
        {...buttonProps}
        ref={buttonRef}
        key={i}
        className="w-full"
        role="button"
        aria-expanded={open ? true : false}
      >
        <Flex
          onClick={() => {
            contentEl.current.style.height = window.getComputedStyle(
              contentEl.current
            ).height;

            handleToggle(i);
            contentEl.current.style.height = !open
              ? `${contentEl.current.scrollHeight}px`
              : window.getComputedStyle(contentEl.current).height === '0'
              ? '0'
              : '0px';
          }}
          justifyContent="space-between"
        >
          <span
            className="uppercase"
            sx={{
              color: 'nittanyNavy',
              fontSize: 18,
              fontWeight: 'medium',
              fontFamily: 'condensed',
              pr: 5,
            }}
          >
            {menuListDataItem.title}
          </span>
          <Icon
            className="flex"
            size={20}
            color="nittanyNavy"
            icon="expand"
            extraSx={{
              '& > svg': {
                transition: 'all ease .4s',
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              },
            }}
          />
        </Flex>
        <div
          className="overflow-hidden"
          ref={contentEl}
          style={{
            ...(open && open
              ? {
                  height: contentEl.current && contentEl.current.scrollHeight,
                }
              : { height: '0px' }),
          }}
          sx={{
            transition: 'height smooth 0.2s',
          }}
        >
          <Flex
            tag="ul"
            extraSx={{ my: 4, ml: 3 }}
            className="no-wrap"
            direction="column"
            gap={4}
          >
            {[
              <>
                {menuListDataItem.href && (
                  <li
                    sx={{ pr: 10 }}
                    className="list-none w-full"
                    key={useId()}
                  >
                    {/* Append one more item at the beginning of array if
                menuListDataItem title also has an href */}

                    <MobileMenuListLinkItem
                      item={{
                        href: menuListDataItem.href,
                        title: menuListDataItem.title,
                      }}
                    />
                  </li>
                )}
              </>,
              ...menuListDataItem.megaMenuItemsCollection.map((item, j) => {
                return (
                  <li className="list-none w-full" key={useId()}>
                    <MobileMegaMenuListLinkItem
                      i={j}
                      key={j}
                      parentButtonRef={contentEl}
                      buttonRef={mobileMegaMenuButtonRef}
                      open={mobileMegaMenuOpenKey === j}
                      menuListDataItem={item}
                      buttonProps={buttonProps}
                      handleToggle={handleToggleMobileMegaMenu}
                    />
                  </li>
                );
              }),
            ]}
          </Flex>
        </div>
      </div>
    );
  };

  const MobileMenuLink = ({ menuListDataItem, i }) => {
    return (
      <Link
        key={i}
        to={menuListDataItem?.href}
        className="uppercase w-full"
        color="nittanyNavy"
        extraSx={{
          fontWeight: 'medium',
          fontSize: 18,
          fontFamily: 'condensed',
        }}
      >
        {menuListDataItem.title}
      </Link>
    );
  };

  const MobileMenus = ({ ...props }) => {
    const [openKey, setOpenKey] = useState<number>();
    const buttonRef: MutableRefObject<any> = useRef<any>();
    let { buttonProps } = useButton(props, buttonRef);

    const handleToggle = (key: number): void => {
      //open clicked MobileMenuListItem by key
      setOpenKey(openKey !== key ? key : undefined);
    };

    return (
      <Flex extraSx={{ pb: 20 }} direction="column">
        <Grid>
          <Flex
            extraSx={{ gridColumn: ['1/5', '2/8', '3/11', '3/11'] }}
            gap={4}
            tag="ul"
            className="w-full"
            justifyContent="space-between"
            alignItems="flex-start"
            direction="column"
          >
            {navItemsCollection?.map((item, i) => {
              return !item.megaMenuItemsCollection ? (
                <li className="list-none w-full" key={useId()}>
                  {!item.linkItemsCollection && item?.href ? (
                    <MobileMenuLink menuListDataItem={item} i={i} />
                  ) : (
                    <MobileMenuListItem
                      i={i}
                      key={i}
                      buttonRef={buttonRef}
                      open={openKey === i}
                      menuListDataItem={item}
                      buttonProps={buttonProps}
                      handleToggle={handleToggle}
                    />
                  )}
                </li>
              ) : (
                <li
                  sx={{ py: '2px' }}
                  className="list-none w-full"
                  key={useId()}
                >
                  {!item.megaMenuItemsCollection && item?.href ? (
                    <MobileMenuLink menuListDataItem={item} i={i} />
                  ) : (
                    <MobileMegaMenuListItem
                      i={i}
                      key={i}
                      buttonRef={buttonRef}
                      open={openKey === i}
                      menuListDataItem={item}
                      buttonProps={buttonProps}
                      handleToggle={handleToggle}
                    />
                  )}
                </li>
              );
            })}
          </Flex>
        </Grid>
        <CtaItems />
      </Flex>
    );
  };

  return (
    <Flex direction="column" extraSx={{ zIndex: 2, position: 'relative' }}>
      {/* nav */}
      <AppBar backgroundColor="nittanyNavy" position="sticky">
        <div className="relative">
          <Container>
            <Wrapper>
              <Flex gutterY={7} justifyContent="space-between">
                <Flex
                  direction={isXl ? 'row' : isLg ? 'row' : 'column'}
                  gap={isXl ? 12 : isLg ? 12 : 4}
                >
                  <HeaderMark
                    tierOneMark={tierOneMark && tierOneMark}
                    tierTwoEntity={tierTwoEntity}
                  />
                  {tierThreeDepartment && (
                    <Link
                      to={tierThreeDepartment.href}
                      className="uppercase"
                      extraSx={{
                        mt: [0, 1, 1, 1],
                        maxWidth: ['244px', '220px', '268px', '268px'],
                        color: 'white',
                        variant: `text.header.tierThree.18`,
                      }}
                    >
                      {tierThreeDepartment.title}
                    </Link>
                  )}
                </Flex>
                {/* ctas or menu button */}
                {!isXl ? (
                  !isMobileMenuOpen ? (
                    <MenuButton
                      extraSx={{ mt: [0, 1, 0, 0] }}
                      onClick={toggleIsMobileMenuOpen}
                    />
                  ) : (
                    <CloseButton
                      size="xs"
                      extraSx={{ mt: [0, 1, 0, 0] }}
                      variant="white"
                      onClick={toggleIsMobileMenuOpen}
                    />
                  )
                ) : (
                  <CtaItems />
                )}
              </Flex>
            </Wrapper>
          </Container>
          {/* desktop menus*/}
          {isXl && <DesktopMenus />}
        </div>
        {/* mobile menus */}
        {!isXl && (
          <div
            className="absolute w-full"
            ref={containerEl}
            sx={{
              backgroundColor: 'white',
              boxShadow: 'sm-1',
              mx: 'auto',
              pt: isMobileMenuOpen ? 9 : 0,
              overflow: 'auto',
              ...(isMobileMenuOpen && isMobileMenuOpen
                ? {
                    height: '100vh',
                  }
                : { height: '0px' }),
            }}
          >
            <Container>
              <Wrapper>
                <MobileMenus />
              </Wrapper>
            </Container>
          </div>
        )}
      </AppBar>
    </Flex>
  );
};
