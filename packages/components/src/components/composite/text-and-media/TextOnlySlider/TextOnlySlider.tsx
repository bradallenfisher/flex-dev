/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { TextOnlySliderProps } from './TextOnlySliderTypes';
import {
  AdvanceButton,
  Container,
  DisplayHeading,
  Divider,
  Grid,
  Heading,
  RichTextContent,
  Wrapper,
} from '@psu-flex/core-ui';
import { useState } from 'react';
import { Flex } from '@psu-flex/core-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import { sliderVariantProps, fade } from './TextOnlySliderStyles';

const Slide = ({
  active,
  i,
  richTextRaw,
  heading,
  subHeading,
  sliderVariant,
  dividerColor,
}) => {
  const { headingColor, bodyColor, subHeadingColor } =
    sliderVariantProps[sliderVariant];

  return (
    <Flex
      key={i}
      extraSx={{
        minWidth: '100%',
        ...(active
          ? {
              animationName: `${fade}`,
              animationDuration: '.4s',
              visibility: 'visible',
            }
          : { position: 'relative', opacity: 0, visibility: 'hidden' }),
      }}
      direction="column"
    >
      {subHeading && (
        <Heading
          extraSx={{ mb: 3 }}
          className="uppercase"
          color={subHeadingColor}
          variant={22}
        >
          {subHeading}
        </Heading>
      )}
      <DisplayHeading color={headingColor} variant={64}>
        {heading}
      </DisplayHeading>
      <Divider
        size="80px"
        extraSx={{ mt: [8, 9, 10, 11], mb: 4 }}
        thickness="lg"
        color={dividerColor as any}
      />
      <RichTextContent
        richTextRaw={richTextRaw}
        className="w-full"
        bodyVariant={20}
        extraSx={{
          pb: 3,
          '& > div > p': { color: bodyColor },
          '& > div > p > a': { color: sliderVariant === 'navy' && 'linkLight' },
        }}
      />
    </Flex>
  );
};

export const TextOnlySlider = ({
  sliderVariant = 'white',
  sliderData,
  dividerColor,
}: TextOnlySliderProps) => {
  const [active, setActive] = useState(0);
  const { isMd, isSm } = useBreakpoints();

  const content = useRef(null);

  const {
    advanceButtonVariant,
    backgroundColor,
    selectedBulletColor,
    notSelectedBulletColor,
  } = sliderVariantProps[sliderVariant];

  //for AdvanceButton onClicks
  const onNext = () => {
    // Calculate translation distance
    // @ts-ignore
    let translateX;
    if (active === sliderData.length - 1) {
      translateX = 0;
    } else {
      translateX = (1 + active) * 100;
    }
    // @ts-ignore
    content.current.style.transform = `translateX(-${translateX}%)`;
    if (active === sliderData.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    // Calculate translation distance
    // @ts-ignore
    let translateX;
    if (active === 0) {
      translateX = (sliderData.length - 1) * 100;
    } else {
      translateX = (active - 1) * 100;
    }
    // @ts-ignore
    content.current.style.transform = `translateX(-${translateX}%)`;
    if (active === 0) {
      setActive(sliderData.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const onBulletClick = (i) => {
    // @ts-ignore
    let translateX = i * 100;
    // @ts-ignore
    content.current.style.transform = `translateX(-${translateX}%)`;
    setActive(i);
  };
  let touchStartX = 0;
  let touchEndX = 0;

  //for mobile controls
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  //for mobile controls
  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  //for mobile controls
  const handleTouchEnd = () => {
    if (touchEndX < touchStartX) {
      // Swiped from left to right
      onNext(); // Change slide to the next one
    } else if (touchEndX > touchStartX) {
      // Swiped from right to left
      onPrev(); // Change slide to the previous one
    }
    // Reset touch coordinates
    touchStartX = 0;
    touchEndX = 0;
  };

  return (
    <div
      sx={{
        pt: [12, 15, 15, 18],
        pb: [9, 12, 12, 15],
        backgroundColor: backgroundColor,
      }}
      className="w-full h-full z-top"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Container>
        <Wrapper>
          <Grid className="items-center">
            {!isMd && !isSm && (
              <AdvanceButton
                variant={advanceButtonVariant as any}
                direction="left"
                onClick={onPrev}
              />
            )}
            <Flex
              extraSx={{ gridColumn: ['1/5', '2/8', '3/11', '3/11'] }}
              direction="column"
            >
              <Flex
                className="h-full w-full overflow-hidden"
                direction="row"
                justifyContent="center"
                extraSx={{
                  mx: 'auto',
                  maxWidth: '100%',
                }}
              >
                <div
                  sx={{ transition: '0s' }}
                  ref={content}
                  className="flex-row w-full"
                >
                  {sliderData.map((item, i) => {
                    return (
                      <Slide
                        dividerColor={dividerColor}
                        sliderVariant={sliderVariant}
                        key={i}
                        {...item}
                        sliderData={sliderData}
                        active={i === active}
                        i={i}
                      />
                    );
                  })}
                </div>
              </Flex>
              <ul sx={{ mt: [6, 7, 8, 9] }} className="flex-row justify-center">
                {sliderData.map((item, i) => {
                  return (
                    <li
                      key={i}
                      sx={{ width: '24px', height: '24px', margin: 0, p: 0 }}
                      className="list-none pointer relative w-fit"
                    >
                      <button
                        tabIndex={0}
                        className="block pointer outline-none"
                        onClick={() => onBulletClick(i)}
                        sx={{
                          p: '5px',
                          fontSize: 0,
                          lineHeight: 0,
                          backgroundColor: 'transparent',
                          border: '0px',
                          '&:before': {
                            display: 'block',
                            fontSize: '40px',
                            lineHeight: '24px',
                            width: 'fit-content',
                            height: '24px',
                            content: '"•"',
                            textAlign: 'center',
                            color:
                              i === active
                                ? selectedBulletColor
                                : notSelectedBulletColor,
                          },
                          '&:focus-visible': {
                            border: '1px dashed #005FA9',
                          },
                        }}
                      >
                        {''}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Flex>
            {!isMd && !isSm && (
              <AdvanceButton
                variant={advanceButtonVariant as any}
                direction="right"
                extraSx={{
                  marginLeft: 10,
                  gridColumn: ['5/6', '8/9', '12/13', '12/13'],
                }}
                onClick={onNext}
              />
            )}
          </Grid>
        </Wrapper>
      </Container>
    </div>
  );
};
