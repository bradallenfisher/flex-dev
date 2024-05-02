/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useCallback } from 'react';
import dayjs from 'dayjs';
import { useToggle } from '@psu-flex/utility-hooks';
import {
  Heading,
  Body,
  AppBar,
  Icon,
  RichTextContent,
} from '@psu-flex/core-ui';
import { Container, Grid, Flex, Wrapper } from '@psu-flex/core-ui';
import { AlertBannerProps } from './AlertBannerTypes';
import { bannerAlertVariants, hiddenSx, showSx } from './AlertBannerStyles';
import { useEscapeKey } from '@psu-flex/utility-hooks';

/** The AlertBanner component allows the user to show site wide banner above the header. */
export const AlertBanner = ({
  severity,
  openText,
  closedText,
  publishedOn,
}: AlertBannerProps) => {
  // Memoize the defaultIsMessageOpenState function
  const defaultIsMessageOpenState = useCallback(() => {
    if (severity === 'urgent' || severity === 'immediate') {
      return true;
    } else {
      return false;
    }
  }, [severity]);

  const [isOpen, setIsOpen] = useToggle(defaultIsMessageOpenState());
  let readableDate;
  let readableTime;

  if (publishedOn) {
    readableDate = dayjs(publishedOn).format('MMMM DD, YYYY');
    readableTime = dayjs(publishedOn).format('h:mm A');
  }
  useEscapeKey(() => setIsOpen(!isOpen));

  // Memoize the handleKeyDown function
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setIsOpen]
  );

  return (
    <AppBar
      tabIndex={0}
      aria-expanded={isOpen ? true : false}
      className="pointer"
      backgroundColor={bannerAlertVariants[severity].backgroundColor}
      position="unset"
      onClick={setIsOpen}
      onKeyDown={handleKeyDown}
    >
      <Container>
        <Wrapper>
          <Grid
            className="relative"
            extraSx={{
              py: 4,
              rowGap: [0, 0, 0, 0],
            }}
          >
            <Flex
              gap={3}
              alignItems="center"
              extraSx={{
                pr: ['44px', 0, 0, 0],
                gridColumn: ['1/5', '2/8', '4/10', '4/10'],
                justifyContent: ['flex-start', 'center', 'center', 'center'],
                ...(isOpen
                  ? { ...hiddenSx }
                  : {
                      ...showSx,
                    }),
              }}
            >
              <Icon
                color="coalyGray"
                icon={bannerAlertVariants[severity].icon}
              />
              <Heading
                color="coalyGray"
                className="uppercase"
                tag="h4"
                variant={18}
              >
                {closedText}
              </Heading>
            </Flex>
            <Flex
              tabIndex={-1}
              extraSx={{
                mb: !isOpen ? 0 : [3, 3, 0, 0],
                gridColumn: ['1/5', '1/9', '1/3', '1/3'],
                ...(!isOpen
                  ? { ...hiddenSx }
                  : {
                      ...showSx,
                    }),
              }}
              direction="column"
            >
              {publishedOn && (
                <>
                  <Body variant={16}>{readableDate}</Body>
                  <Body variant={16}>{readableTime}</Body>
                </>
              )}
            </Flex>
            <Flex
              tabIndex={-1}
              gap={2}
              extraSx={{
                gridColumn: ['1/5', '1/9', '3/12', '3/12'],
                ...(!isOpen
                  ? { ...hiddenSx }
                  : {
                      ...showSx,
                    }),
              }}
            >
              <Icon
                color="coalyGray"
                icon={bannerAlertVariants[severity].icon}
              />
              <RichTextContent tabIndex={-1} richTextRaw={openText} />
            </Flex>
            <Icon
              className="absolute"
              size={24}
              icon="expand"
              extraSx={{
                right: 0,
                mt: 4,
                '& > svg': {
                  transition: 'all ease .4s',
                  transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                },
              }}
            />
          </Grid>
        </Wrapper>
      </Container>
    </AppBar>
  );
};
