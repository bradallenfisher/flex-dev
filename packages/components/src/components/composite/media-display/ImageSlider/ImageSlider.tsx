/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import Slider from 'react-slick';
import React, { useEffect, useRef, createContext, useContext } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { ImageSliderProps } from './ImageSliderTypes';
import {
  AdvanceButton,
  ComponentIntro,
  useComponentIntro,
  Body,
} from '@psu-flex/core-ui';
import { useState } from 'react';
import { SliderLightBox } from './SliderLightBox/SliderLightBox';
import {
  Wrapper,
  Section,
  Container,
  Grid,
  Flex,
} from '../../../base-components/layout';
import { SliderBullets } from './SliderBullets';
import { fade } from './ImageSliderStyles';
import { ImageSliderContext, ImageSliderProvider } from './ImageSliderProvider';

export const ImageSliderInnerComponent = ({
  advanceButtonVariant = 'nittanyNavy',
  sliderData,
  ...props
}: ImageSliderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ImageSliderContext);

  const { activeSlide, setActiveSlide } = context || {};

  let sliderRef = useRef(null);
  let captionRef = useRef(null);

  const openLightBox = (i) => {
    setIsOpen(true);
  };

  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);

  const handleSlideClick = (e) => {
    const target = e.target;
    // Check if the clicked element or any of its ancestors have the class 'slick-current'
    if (target.closest('.slick-current')) {
      const closestElement = target.closest('.slick-current');
      const targetIndex = parseInt(closestElement.dataset.index);

      // openLightBox at the targeted index
      openLightBox(targetIndex);
    }
  };

  const onBulletClick = (i: any) => {
    let translateX = i * 100;
    sliderRef.slickGoTo(i);
    captionRef.current.style.transform = `translateX(-${translateX}%)`;
    setActiveSlide(i);
  };

  // update current caption when active slide changes
  useEffect(() => {
    if (captionRef.current) {
      let translateX = activeSlide * 100;
      captionRef.current.style.transform = `translateX(-${translateX}%)`;
    }
  }, [activeSlide, captionRef, sliderData, isOpen]);

  // slider settings
  const defaultSettings = {
    nextArrow: (
      <AdvanceButton variant={advanceButtonVariant} direction="right" />
    ),
    prevArrow: <AdvanceButton variant={advanceButtonVariant} />,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    initialSlide: activeSlide ? activeSlide : 0,
    className: 'center',
    centerMode: true,
    slidesToShow: 3,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  return !isOpen ? (
    <>
      {componentIntroProps && (
        <Wrapper extraSx={{ mt: [8, 12, 12, 12] }}>
          <ComponentIntro {...componentIntroProps} />
        </Wrapper>
      )}
      <div
        sx={{
          //target generated active slide div
          '& > div > div > div > .slick-current': {
            cursor: 'pointer',
            '&:hover > div > img': {
              transform: 'scale(1.01)',
            },
          },
          '& > div > div > div > div > div': {
            height: ['200px', '300px', '360px', '480px'],
            overflow: 'hidden',
          },
          mb: [8, 12, 12, 12],
          mt: componentIntroProps ? '[8, 12, 12, 12]' : '',
        }}
        className="slick-container"
        onClick={handleSlideClick}
      >
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...defaultSettings}
        >
          {sliderData.map((item, i) => {
            return (
              <img
                key={i}
                sx={{
                  mx: ['6px', '10px', 3, 3],
                  width: 'auto !important',
                }}
                alt={`${item.alt ? item.alt : ''}`}
                src={item.src}
              />
            );
          })}
        </Slider>

        {/* render if caption property exists in any item in sliderData */}
        {sliderData.some((item) => 'caption' in item) && (
          <Container tag="span">
            <Wrapper>
              <Grid>
                <Flex
                  extraSx={{ gridColumn: ['1/5', '2/8', '3/11', '3/11'] }}
                  direction="column"
                >
                  <Flex
                    className="h-full w-full overflow-hidden mx-auto max-w-full"
                    direction="row"
                    justifyContent="center"
                  >
                    <div
                      sx={{ transition: '0s' }}
                      ref={captionRef}
                      className="flex-row w-full"
                    >
                      {sliderData.map((item, i) => {
                        return (
                          <Body
                            variant={16}
                            className="min-w-full"
                            extraSx={{
                              ...(activeSlide === i
                                ? {
                                    animationName: `${fade}`,
                                    animationDuration: '.4s',
                                  }
                                : { position: 'relative', opacity: 0 }),
                              mt: [5, 5, 6, 6],
                            }}
                          >
                            {item.caption}
                          </Body>
                        );
                      })}
                    </div>
                  </Flex>
                </Flex>
              </Grid>
            </Wrapper>
          </Container>
        )}
        <SliderBullets
          activeSlide={activeSlide}
          sliderData={sliderData}
          callback={onBulletClick}
        />
      </div>
    </>
  ) : (
    <SliderLightBox
      setIsOpen={setIsOpen}
      selectedIndex={activeSlide}
      sliderData={sliderData}
    />
  );
};

export const ImageSlider = ({ ...sliderProps }: ImageSliderProps) => {
  return (
    <ImageSliderProvider>
      <ImageSliderInnerComponent {...sliderProps} />
    </ImageSliderProvider>
  );
};
