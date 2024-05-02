'use-client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import {
  BackgroundWrapper,
  Container,
  Flex,
  Grid,
  Wrapper,
} from '../../../base-components/layout';
import { NewsThumbnailsProps } from './NewsThumbnailsTypes';
import {
  CtaButton,
  ComponentIntro,
  NewsThumbnail,
  useComponentIntro,
} from '@psu-flex/core-ui';
import { fade } from './NewsThumbnailsStyles';
export const NewsThumbnails = ({
  cardData,
  linkToRss,
  backgroundColor,
  ...props
}: NewsThumbnailsProps) => {
  const count = 4;
  const [prevPosts, setPrevPosts] = useState(null);
  const [isEnterPressed, setIsEnterPressed] = useState(false); // Manage enter press state
  const [posts, setPosts] = useState(cardData.slice(0, count));
  const morePosts = () => {
    //check for keyboard event to avoid endless loop
    if (!isEnterPressed) {
      const start = posts.length;
      const end = start + count;
      const newPosts = cardData.slice(start, end);
      const addedPosts = posts.concat(newPosts);
      setPrevPosts(posts);
      setPosts(addedPosts);
    } else return;
  };
  const totalPosts = cardData.length;

  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);

  // todo need to figure out why external packages cant be used in sb app before integrating this
  // const parser = new Parser();

  // if (linkToRss) {
  //   useEffect(() => {
  //     parser
  //       .parseURL('https://www.psu.edu/news/rss/rss.xml')
  //       .then((feed) => {
  //         setCards(feed.items);
  //       })
  //       .catch((error) => {
  //         console.error('Error parsing RSS feed:', error);
  //       });
  //   }, []);
  // }

  // useEffect(() => {
  //   setPosts(cardData.slice(0, count));
  // }, [cardData]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !isEnterPressed) {
      setIsEnterPressed(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !isEnterPressed) {
      morePosts();
      setIsEnterPressed(true);
    } else {
      setIsEnterPressed(false);
    }
  };

  return (
    <BackgroundWrapper variant={backgroundColor}>
      <Container>
        <Wrapper>
          {componentIntroProps && (
            <ComponentIntro introHeading={componentIntroProps.introHeading} />
          )}
          <Flex alignItems="center" direction="column">
            <Grid
              className="items-stretch"
              extraSx={{
                rowGap: [6, 6, 6, 6],
              }}
            >
              {posts &&
                posts?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      sx={{
                        //@ts-ignore
                        ...(i > prevPosts?.length && {
                          animationName: `${fade}`,
                          animationDuration: '.4s',
                        }),
                        gridColumn: [
                          'auto / span 4',
                          'auto / span 4',
                          'auto / span 3',
                          'auto / span 3',
                        ],
                      }}
                    >
                      <NewsThumbnail
                        date={item.isoDate ?? item.date}
                        title={item.title}
                        link={item.link}
                        image={item?.enclosure?.url ?? item.image}
                        imageAlt={item.imageAlt && item.imageAlt}
                      />
                    </div>
                  );
                })}
            </Grid>
            {linkToRss ? (
              <>
                {posts?.length < totalPosts && (
                  <CtaButton
                    onKeyDown={handleKeyDown}
                    variant="primaryOutlined"
                    onClick={morePosts}
                    endIcon={'plus'}
                    extraSx={{
                      mt: [8, 10, 10, 10],
                    }}
                  >
                    Load More
                  </CtaButton>
                )}
              </>
            ) : (
              <CtaButton
                to={'https://www.psu.edu/news/'}
                variant="primaryOutlined"
                endIcon={'chevronRight'}
                extraSx={{
                  mt: [8, 10, 10, 10],
                }}
              >
                More Penn State News
              </CtaButton>
            )}
          </Flex>
        </Wrapper>
      </Container>
    </BackgroundWrapper>
  );
};
