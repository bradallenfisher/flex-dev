/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  AppBar,
  Icon,
  NavButton,
  MenuButton,
  HeaderMark,
  Link,
  CloseButton,
} from '@psu-flex/core-ui';
import { Container, Flex, Grid, Wrapper } from '@psu-flex/core-ui';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useToggle, useBreakpoints } from '@psu-flex/utility-hooks';
import { useButton, useId } from 'react-aria';
import { Spaces } from '@psu-flex/core-ui';
import { generateHocId } from '@psu-flex/utility-functions';
export interface FlexHeaderProps {
  ctaItemsCollection?: any;
  desktopMenuGap?: Spaces[];
  tierThreeDepartment?: {
    title: string;
    to: string;
  };
  navItemsCollection?: any;
  tierTwoEntity?: {
    title: string;
    to: string;
  };
  tierOneMark?: any;
}

/** Description */

export const FlexHeader = ({
  ctaItemsCollection,
  navItemsCollection,
  tierThreeDepartment,
  tierTwoEntity,
  tierOneMark,
  desktopMenuGap = [0, 0, 12, 15],
}: FlexHeaderProps) => {
  const { isLg, isXl, is2xl } = useBreakpoints();
  const hocId = generateHocId('Header');
  const [isMobileMenuOpen, toggleIsMobileMenuOpen] = useToggle(false);
  const containerEl: MutableRefObject<any> = useRef<any>();
  // const scrollDirection = useScrollDirection();

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
              hocId={hocId}
              key={i}
              to={item.to}
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
          px: 2,
          py: '6px',
          listStyleType: 'none',
          borderRadius: 'xs',
          '&:hover': {
            backgroundColor: 'limestoneLight',
          },
        }}
        {...props}
      >
        <Link
          underline="none"
          tabIndex={openMenu ? 0 : -1}
          to={item?.to}
          color="coalyGray"
          className="w-full"
          extraSx={{
            variant: 'text.menu.list.18',
          }}
        >
          {item?.title}
        </Link>
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
      const to = item?.item?.to ? item?.item?.to : item?.item?.categoryLink?.to;

      const title = item?.item?.title
        ? item?.item?.title
        : item?.item?.categoryLink?.title;

      return (
        <Link
          to={to}
          tabIndex={0}
          color="white"
          extraSx={{ variant: 'text.menu.heading.18' }}
        >
          {title}
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
            direction="column"
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
            {item?.linkItemsCollection?.items.map((item, i) => {
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
              extraSx={{ gridColumn: ['1/5', '1/8', '1/13', '1/13'] }}
              justifyContent="center"
            >
              <Flex
                justifyContent="center"
                className="w-full"
                id="menu-container"
                gap={desktopMenuGap}
              >
                {/* regular menu */}
                {navItemsCollection?.map((item, navindex) => {
                  return (
                    <div key={navindex}>
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
                        {!item.linkItemsCollection && item?.to ? (
                          <>
                            <DesktopMenuLink item={item} />
                          </>
                        ) : item?.linkItemsCollection && item?.categoryLink ? (
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
                              onKeyDown={(e) => handleMenuKeyPress(e, navindex)}
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
                      {/* mega menu */}
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
                              pb: 4,
                              px: 3,
                              borderBottom: '4px',
                              borderColor: 'transparent',
                              transition: 'all 0.25s ease',
                              '&:hover + div': {
                                visibility: 'visible',
                                opacity: 1,
                                pointerEvents: 'auto',
                                transform: 'scale(1)',
                              },
                            }}
                            className="items-center pointer relative flex"
                          >
                            <button
                              className="pointer"
                              sx={{
                                color: 'white',
                                backgroundColor: 'transparent',
                                border: 'none',
                                variant: 'text.menu.heading.16',
                              }}
                            >
                              {item.title}
                            </button>
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
                              variant="col"
                              gap={1}
                              extraSx={{
                                pt: 4,
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
                                            <Flex variant="col">
                                              <h5
                                                className="uppercase"
                                                sx={{
                                                  borderLeft: '3px',
                                                  borderColor: 'accent',
                                                  pl: 2,
                                                  py: '2px',
                                                  fontFamily: 'condensed',
                                                  fontWeight: 'bold',
                                                  fontSize: 18,
                                                }}
                                              >
                                                {item.title}
                                              </h5>
                                              <Flex
                                                extraSx={{ mx: 3 }}
                                                gap={1}
                                                variant="col"
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
        to={item?.to}
        className="w-full"
        tabIndex={0}
        color="coalyGray"
        extraSx={{
          variant: 'text.menu.list.18',
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
        <Flex onClick={() => handleToggle(i)} justifyContent="space-between">
          <span
            className="uppercase"
            sx={{
              color: 'nittanyNavy',
              fontSize: 18,
              fontWeight: 'medium',
              fontFamily: 'condensed',
            }}
          >
            {menuListDataItem?.categoryLink?.title}
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
            extraSx={{ my: 5, ml: 3 }}
            className="no-wrap"
            variant="col"
            gap={4}
          >
            {[
              <li className="list-none w-full" key={useId()}>
                {/* Append one more item at the beginning of array if
                menuListDataItem title also has an href */}
                {menuListDataItem.categoryLink.to && (
                  <MobileMenuListLinkItem
                    item={{
                      to: menuListDataItem.categoryLink.to,
                      title: menuListDataItem.categoryLink.title,
                    }}
                  />
                )}
              </li>,
              menuListDataItem.linkItemsCollection?.items.map((item) => (
                <li className="list-none w-full" key={useId()}>
                  <MobileMenuListLinkItem item={item} />
                </li>
              )),
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
        to={menuListDataItem?.to}
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
            gap={5}
            tag="ul"
            className="w-full"
            justifyContent="space-between"
            alignItems="flex-start"
            direction="column"
          >
            {navItemsCollection?.map((item, i) => {
              return (
                <li className="list-none w-full" key={useId()}>
                  {!item.linkItemsCollection && item?.to ? (
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
              );
            })}
          </Flex>
        </Grid>
        <CtaItems />
      </Flex>
    );
  };

  return (
    <Flex id={hocId} direction="column">
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
                      to={tierThreeDepartment.to}
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
                      hocId={hocId}
                      extraSx={{ mt: [0, 1, 0, 0] }}
                      onClick={toggleIsMobileMenuOpen}
                    />
                  ) : (
                    <CloseButton
                      hocId={hocId}
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
              pt: isMobileMenuOpen ? 10 : 0,
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
