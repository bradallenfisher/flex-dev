/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useRef, useState } from 'react';
import { Item } from 'react-stately';
import {
  AppBar,
  Drawer,
  FormLabel,
  Icon,
  Link,
  ListBox,
  SearchButton,
  SearchCta,
  CloseButton,
  DefaultTierOne,
  Shield,
  Container,
  Flex,
  Grid,
  LinkWrapper,
  Wrapper,
} from '../../../base-components';
import { useBreakpoints, useToggle } from '@psu-flex/utility-hooks';
import { radioSx } from './BrandBarStyles';
import {
  brandBarButtonData,
  federatedCoreLinks,
  federatedNavigationLinks,
} from './fallbackBrandBarData';
import { generateHocId } from '@psu-flex/utility-functions';
import { BrandBarTypes } from './BrandBarTypes';
import { VisuallyHidden } from 'react-aria';

export const BrandBar = ({
  ctaItemsCollection,
  flyOutMenuNavItemsCollection,
  flyOutMenuPopularLinksItemsCollection,
}: BrandBarTypes) => {
  const [isDrawerOpen, toggleIsDrawerOpen] = useToggle(false);
  const [selectedOption, setSelectedOption] = useState('Current Site');
  const [isInputFocused, toggleIsInputFocused] = useToggle(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputValid, setIsInputValid] = useState(false);
  const { isXl } = useBreakpoints();
  const hocId = generateHocId('BrandBar');
  const ctaItems = ctaItemsCollection ?? brandBarButtonData;

  const handleInputChange = () => {
    // Check if the input has a value
    setIsInputValid(!!inputRef?.current?.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside the input
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Drop focus by blurring the input
        inputRef.current.blur();
      }
    };

    // Add event listener to detect clicks outside the input
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    // focus the search input field when drawer opens
    if (isDrawerOpen) {
      inputRef.current?.focus();
    }
  }, [isDrawerOpen]);

  const handleRadioChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
    inputRef?.current?.focus();
  };

  return (
    <>
      <VisuallyHidden isFocusable={true}>
        <Link to="#maincontent" variant={20}>
          Skip to main content
        </Link>
      </VisuallyHidden>
      {/**search flyout */}
      <Drawer
        extraSx={{ pt: [12, 20, 20, 20] }}
        backgroundColor="nittanyNavy"
        onClose={toggleIsDrawerOpen}
        isOpen={isDrawerOpen}
      >
        <Grid>
          <Flex
            extraSx={{
              pb: [20, 0, 25, 0],
              gridColumn: ['1/5', '2/8', '3/11', '3/11'],
            }}
            direction="column"
          >
            <Flex justifyContent="space-between">
              <LinkWrapper to="/">
                <Flex>
                  <Shield extraSx={{ mr: 2 }} width={51} height={56} />
                  <DefaultTierOne
                    extraSx={{ mt: [2, 2, 3, 3] }}
                    width={116}
                    height={18}
                  />
                </Flex>
              </LinkWrapper>
              <CloseButton
                hocId={hocId}
                variant="white"
                onClick={toggleIsDrawerOpen}
              />
            </Flex>
            {/* google programmable search */}
            <form
              sx={{ mt: [8, 10, 12, 12], mb: [6, 8, 8, 8] }}
              method={'get'}
              action={'/search'}
              id="google-search"
            >
              <Flex direction="column" gap={2}>
                <Flex
                  extraSx={{
                    backgroundColor: 'white',
                    py: 3,
                    px: 5,
                    variant: 'text.bodyStyle.full.16',
                    borderWidth: 'lg',
                    borderStyle: 'solid',
                    borderRadius: 'xs',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'linkLight',
                    },
                    ...(isInputFocused && {
                      borderColor: 'linkLight',
                    }),
                  }}
                >
                  <input
                    id="form-field-input"
                    type="search"
                    name="query"
                    ref={inputRef}
                    aria-label={'search-form-field'}
                    placeholder="What are you looking for?"
                    sx={{
                      width: '100%',
                      backgroundColor: 'white',
                      outline: 'none',
                      variant: 'text.bodyStyle.full.16',
                      '&::placeholder': {
                        color: 'coalyGray',
                        fontStyle: 'normal',
                      },
                      border: '0px',
                    }}
                    aria-live="polite"
                    onChange={handleInputChange}
                    onFocus={toggleIsInputFocused}
                    onBlur={toggleIsInputFocused}
                  />
                  <button
                    className="outline-none"
                    sx={{
                      p: 1,
                      border: '0px',
                      borderRadius: '100%',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      '& > span > svg > path': {
                        fill: 'link',
                      },
                      '&:hover': {
                        backgroundColor: isInputValid
                          ? 'limestoneLight'
                          : 'transparent',
                      },
                      '&:focus': {
                        backgroundColor: isInputValid
                          ? 'limestoneLight'
                          : 'transparent',
                      },
                      ...(!isInputValid && {
                        backgroundColor: 'transparent',
                        cursor: 'default',
                        '& > span > svg > path': {
                          fill: 'limestoneGray',
                        },
                      }),
                    }}
                    type="submit"
                    disabled={!isInputValid}
                  >
                    <Icon className="flex" size={24} icon="search" />
                  </button>
                </Flex>
                <Flex direction="row" gap={4}>
                  <FormLabel className="items-center pointer" color="white">
                    <input
                      className="pointer"
                      sx={{
                        ...radioSx,
                      }}
                      type="radio"
                      name="radioGroup"
                      id="option1"
                      value="Current Site"
                      checked={selectedOption === 'Current Site'}
                      onChange={handleRadioChange}
                    />
                    Current Site
                  </FormLabel>
                  <FormLabel className="items-center pointer" color="white">
                    <input
                      className="pointer"
                      sx={{
                        ...radioSx,
                      }}
                      type="radio"
                      name="radioGroup"
                      id="option1"
                      value="Penn State (all sites)"
                      checked={selectedOption === 'Penn State (all sites)'}
                      onChange={handleRadioChange}
                    />
                    Penn State (all sites)
                  </FormLabel>
                </Flex>
              </Flex>
              <input
                name="category"
                value={selectedOption}
                className="gcse-searchresults-only"
                type="hidden"
              />
            </form>
            {/**need to overwrite grid columns here to match design */}
            <Grid
              extraSx={{
                gridTemplateColumns: [
                  'repeat(4, 1fr)',
                  'repeat(6, 1fr)',
                  'repeat(8, 1fr)',
                  'repeat(8, 1fr)',
                ],
              }}
              gap={10}
            >
              <Flex
                direction="column"
                extraSx={{
                  gridColumn: [
                    'auto / span 4',
                    'auto / span 3',
                    'auto / span 4',
                    'auto / span 5',
                  ],
                }}
              >
                <Flex extraSx={{ mb: 6 }} direction="row" gap={4}>
                  {ctaItems?.map((item: any, i: number) => {
                    return (
                      <>
                        {item.title.toLowerCase() !== 'report a concern' && (
                          <SearchCta key={i} to={item.to}>
                            {item.title}
                          </SearchCta>
                        )}
                      </>
                    );
                  })}
                </Flex>
                <ListBox
                  gap={[3, 4, 5, 5]}
                  direction="column"
                  items={
                    flyOutMenuNavItemsCollection ?? federatedNavigationLinks
                  }
                >
                  {(item: any) => (
                    <Item key={item}>
                      <Link
                        tabIndex={0}
                        variant={32}
                        color="white"
                        to={item.to}
                      >
                        {item.title}
                      </Link>
                    </Item>
                  )}
                </ListBox>
              </Flex>

              <Flex
                extraSx={{
                  gridColumn: [
                    'auto / span 4',
                    'auto / span 3',
                    'auto / span 4',
                    'auto / span 3',
                  ],
                }}
                direction="column"
                gap={6}
              >
                <ListBox
                  gap={[2, 3, 4, 4]}
                  direction="column"
                  items={
                    flyOutMenuPopularLinksItemsCollection ?? federatedCoreLinks
                  }
                >
                  {(item: any) => (
                    <Item key={item}>
                      <Link
                        tabIndex={0}
                        className="uppercase"
                        variant={24}
                        color="white"
                        to={item.to}
                      >
                        {item.title}
                      </Link>
                    </Item>
                  )}
                </ListBox>
                {ctaItems?.map((item: any, i: number) => {
                  return (
                    <>
                      {item.title.toLowerCase() === 'report a concern' && (
                        <SearchCta
                          variant="linkLightOutlined"
                          key={i}
                          to={item.to}
                        >
                          {item.title}
                        </SearchCta>
                      )}
                    </>
                  );
                })}
              </Flex>
            </Grid>
          </Flex>
        </Grid>
      </Drawer>
      {/**end */}
      <AppBar id={hocId} position="sticky" backgroundColor="beaverBlue">
        <Container>
          <Wrapper>
            <Flex
              extraSx={{ py: [1, 1, 2, 2] }}
              className="items-center"
              variant="spaceBetween"
            >
              <Link
                className="capitalize"
                color="white"
                extraSx={{ variant: `text.header.brandBar.18` }}
                to={'https://www.psu.edu/'}
              >
                Penn State university
              </Link>
              <Flex gap={5} className="items-center">
                <SearchButton hocId={hocId} onClick={toggleIsDrawerOpen} />
                {isXl && (
                  <>
                    {ctaItems?.map((item: any, i: number) => {
                      return (
                        <Link
                          color="white"
                          className="uppercase"
                          extraSx={{ variant: `text.header.brandBar.16` }}
                          key={i}
                          to={item.to}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </>
                )}
              </Flex>
            </Flex>
          </Wrapper>
        </Container>
      </AppBar>
    </>
  );
};
