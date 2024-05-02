/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useContext, useEffect } from 'react';
import { SliderLightBoxProps } from './SliderLightBoxTypes';
import { AdvanceButton, CloseButton, Body } from '@psu-flex/core-ui';
import { gradients } from '@psu-flex/core-ui';
import { useState } from 'react';
import { fade } from './SliderLightBoxStyles';
import { Flex } from '@psu-flex/core-ui';
import { useEscapeKey, useBreakpoints } from '@psu-flex/utility-hooks';
import { ImageSliderContext } from '../ImageSliderProvider';
const Slide = ({ src, active, sliderData, i, alt }) => {
  const { isLg, is2xl } = useBreakpoints();

  return (
    active && (
      <>
        <Body
          className="w-full"
          align="right"
          color="white"
          variant={20}
          extraSx={{ pb: 3 }}
        >
          {i + 1 + '/' + sliderData.length}
        </Body>
        <img
          className="w-full"
          sx={{
            maxHeight: `calc(100% - ${isLg || is2xl ? '320px' : '240px'})`,
            ...(active
              ? {
                  animationName: `${fade}`,
                  animationDuration: '.4s',
                }
              : { position: 'relative', display: 'none' }),
          }}
          src={src}
          alt={`${alt}`}
        />
      </>
    )
  );
};

export const SliderLightBox = ({
  advanceButtonVariant = 'white',
  sliderData,
  selectedIndex,
  setIsOpen,
}: SliderLightBoxProps) => {
  const [active, setActive] = useState(selectedIndex || 0);
  const { isMd, isSm } = useBreakpoints();
  const context = useContext(ImageSliderContext);
  useEscapeKey(() => setIsOpen(false));

  useEffect(() => {
    //sets the context active slide when light box active slide changes
    context?.setActiveSlide(active);
  }, [active]);

  //for AdvanceButton onClicks
  const onNext = () => {
    if (active < sliderData.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    } else {
      setActive(sliderData.length - 1);
    }
  };

  return (
    <div
      className="fixed w-full h-full z-top"
      sx={{
        top: 0,
        left: 0,
        animationName: `${fade}`,
        animationDuration: '.35s',
        backgroundImage: () => `${gradients['powerFacts']}`,
      }}
    >
      <CloseButton
        className="absolute"
        extraSx={{ right: '5%', mt: [5, 10, 10, 12] }}
        onClick={() => setIsOpen(false)}
        variant="white"
      />
      {isMd || isSm ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          className="h-full"
          direction="column"
        >
          <Flex
            className="h-full"
            alignItems="center"
            direction="column"
            justifyContent="center"
            extraSx={{
              mx: '10%',
              maxWidth: '100%',
            }}
          >
            {sliderData.map((item, i) => {
              return (
                <Slide
                  key={i}
                  {...item}
                  sliderData={sliderData}
                  active={i === active}
                  i={i}
                />
              );
            })}
            <Flex extraSx={{ mt: 4 }} alignItems="center" gap={6}>
              <AdvanceButton
                variant={advanceButtonVariant}
                direction="left"
                onClick={onPrev}
              />
              <AdvanceButton
                variant={advanceButtonVariant}
                direction="right"
                onClick={onNext}
              />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex alignItems="center" className="h-full" direction="row">
          <AdvanceButton
            variant={advanceButtonVariant}
            direction="left"
            extraSx={{
              marginLeft: '5%',
              marginRight: 10,
            }}
            onClick={onPrev}
          />
          <Flex
            className="h-full"
            alignItems="center"
            direction="column"
            justifyContent="center"
            extraSx={{
              mx: 'auto',
              maxWidth: '100%',
            }}
          >
            {sliderData.map((item, i) => {
              return (
                <Slide
                  key={i}
                  {...item}
                  sliderData={sliderData}
                  active={i === active}
                  i={i}
                />
              );
            })}
          </Flex>
          <AdvanceButton
            variant={advanceButtonVariant}
            direction="right"
            extraSx={{ marginRight: '5%', marginLeft: 10 }}
            onClick={onNext}
          />
        </Flex>
      )}
    </div>
  );
};
