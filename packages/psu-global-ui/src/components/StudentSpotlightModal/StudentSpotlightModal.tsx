/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import bckImage from './assets/spotlight.svg';
import carousel1 from './assets/carousel-1.svg';
import carousel2 from './assets/carousel-2.svg';
import carousel3 from './assets/carousel-3.svg';
import carousel4 from './assets/carousel-4.svg';
import carousel5 from './assets/carousel-5.svg';
import {
  DisplayHeading,
  Body,
  Heading,
  CtaButton,
  ModalWrapper,
  Link,
} from '@psu-flex/psu-global-ui';
import { Flex, Grid } from '@psu-flex/psu-global-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import { useRef, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import Image from 'next/image';

export interface StudentSpotlightProps {
  title?: string;
  image?: string;
  description?: string;
  buttonText?: string;
  subHeading?: string;
  carouselImages?: Array<{
    src: string;
    title: string;
    description: string;
  }>;
  bottomUrl?: {
    text?: string;
    url?: string;
  };
}

export interface StudentSpotlightModalProps {
  img: string;
  title: string;
  description: string;
  showArrows?: boolean;
  index?: number;
  totalItems?: number;
  closeModal: () => void;
  isOpen: boolean;
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
}

const StudentSpotlightModal: React.FC<StudentSpotlightModalProps> = ({
  closeModal,
  isOpen,
  img,
  title,
  index = -1,
  totalItems = -1,
  description,
  showArrows = true,
  onLeftArrowClick = () => {},
  onRightArrowClick = () => {},
}) => {
  const { isSm, isMd, isXl } = useBreakpoints();

  return (
    <ModalWrapper
      id="student-spotlight-modal"
      isOpen={isOpen}
      onClose={closeModal}
      width="ultrawide"
      onLeftArrowClick={onLeftArrowClick}
      onRightArrowClick={onRightArrowClick}
      showArrows={showArrows}
    >
      <Flex
        extraSx={{
          flexDirection: `${isSm ? 'column' : 'row'}`,
        }}
      >
        <div
          sx={{
            aspectRatio: '4/3',
            width: `${isSm ? '100%' : '50%'}`,
            padding: '10px',
            marginTop: `${isXl ? '100px' : '10px'}`,
          }}
        >
          <Image
            src={img}
            alt={title}
            width={10}
            height={10}
            sizes="100%"
            sx={{ width: '100%', height: 'auto' }}
          />
        </div>

        <Flex
          variant="col"
          extraSx={{
            justifyContent: 'flex-start',
            width: `${isSm ? '100%' : isMd ? '50%' : '40%'}`,
            marginX: 'auto',
            padding: '10px',
          }}
          wrap={false}
        >
          {index > -1 && (
            <p
              sx={{
                mb: 2,
              }}
            >
              {index}/{totalItems}
            </p>
          )}
          <DisplayHeading
            variant={28}
            extraSx={{
              mb: 4,
              color: 'white',
              fontSize: `${isSm ? '1.25rem' : isMd ? '1.375rem' : '1.5rem'}`,
            }}
          >
            {title}
          </DisplayHeading>
          <Body
            variant={18}
            extraSx={{ mb: 3, fontWeight: '400', color: 'white' }}
          >
            {description}
          </Body>
        </Flex>
      </Flex>
    </ModalWrapper>
  );
};

const loremIpsumDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Viverra justo nec ultrices dui. Sed adipiscing diam donec adipiscing tristique risus nec. Lacus sed viverra tellus in hac habitasse. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Mi sit amet mauris commodo. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sollicitudin ac orci phasellus egestas tellus. Gravida cum sociis natoque penatibus et magnis dis parturient. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Urna nunc id cursus metus. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ac tincidunt vitae semper quis lectus nulla. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Consequat ac felis donec et odio pellentesque diam. Diam sit amet nisl suscipit adipiscing. At tellus at urna condimentum mattis pellentesque id. Blandit volutpat maecenas volutpat blandit aliquam etiam. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Elementum integer enim neque volutpat ac. Vel facilisis volutpat est velit egestas dui id ornare arcu. Eu volutpat odio facilisis mauris sit amet massa vitae. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Magnis dis parturient montes nascetur ridiculus. Ultrices neque ornare aenean euismod elementum. Volutpat commodo sed egestas egestas fringilla phasellus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.';

export const StudentSpotlight = ({
  title,
  image = bckImage,
  description,
  buttonText,
  subHeading,
  carouselImages = [
    {
      src: carousel1,
      title: 'Carousel 1',
      description: loremIpsumDescription,
    },
    {
      src: carousel2,
      title: 'Carousel 2',
      description: loremIpsumDescription,
    },
    {
      src: carousel3,
      title: 'Carousel 3',
      description: loremIpsumDescription,
    },
    {
      src: carousel4,
      title: 'Carousel 4',
      description: loremIpsumDescription,
    },
    {
      src: carousel5,
      title: 'Carousel 5',
      description: loremIpsumDescription,
    },
  ],
  bottomUrl = {},
}: StudentSpotlightProps) => {
  const { isSm, isMd, isLg } = useBreakpoints();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentSpotlight, setCurrentSpotlight] = useState<{
    title: string;
    image: string;
    currentIndex?: number;
    totalItems?: number;
  }>({
    title: title || '',
    image: image || '',
  });
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <Grid
      extraSx={{
        gridTemplateColumns: 'repeat(12, 1fr)',

        margin: [
          '32px 0 32px 26px',
          '40px 0 40px 32px',
          '48px 0 48px 62px',
          '48px 0 48px 62px',
        ],
      }}
    >
      <Flex
        extraSx={{
          flexDirection: `${isSm || isMd ? 'column-reverse' : 'row'}`,

          gridColumn: '1/12',
          alignItems: 'flex-start',
        }}
      >
        <Flex
          variant="col"
          extraSx={{
            justifyContent: 'center',
            width: `${isSm || isMd ? '100%' : '50%'}`,
            padding: '10px',
          }}
          wrap={false}
        >
          <Heading
            extraSx={{ mb: 2, color: 'beaverBlue' }}
            // @ts-ignore
            variant={`${isSm ? 16 : 20}`}
          >
            {subHeading}
          </Heading>
          <DisplayHeading
            variant={48}
            extraSx={{
              mb: 4,
              color: 'beaverBlue',
              fontSize: `${isSm ? '2.25rem' : isMd ? '2.5rem' : '3rem'}`,
            }}
          >
            {title}
          </DisplayHeading>
          <Body variant={20} extraSx={{ mb: 3, fontWeight: '400' }}>
            {description?.substring(
              0,
              isSm ? 206 : isMd ? 501 : isLg ? 304 : 334
            )}
            ...
          </Body>
          <CtaButton
            extraSx={{
              mt: 4,
              border: 'none',
              padding: 0,
              fontSize: `${isSm || isMd ? '1.125rem' : '1.25rem'}`,
              '&:hover': {
                color: 'link',
                border: 'none',
              },
              '&:focus': {
                color: 'link',
                border: 'border-0',
              },
            }}
            variant="primaryOutlined"
            onPress={() => {
              setCurrentSpotlight({
                title: title || '',
                image: image || '',
              });
              setIsModalOpen(true);
            }}
          >
            {buttonText}
          </CtaButton>
        </Flex>
        <div
          sx={{
            aspectRatio: '4/3',
            width: `${isSm || isMd ? '100%' : '50%'}`,
            padding: '10px',
          }}
        >
          <Image
            src={image}
            alt="Student Spotlight"
            width={10}
            height={10}
            sizes="100%"
            sx={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Flex>
      <Grid
        extraSx={{
          gridColumn: '1/12',

          gridTemplateColumns: ['repeat(12, 1fr)'],
          gridTemplateRows: ['repeat(12, 1fr)'],
          overflowX: 'scroll',
        }}
        className="no-scrollbar"
        {...events}
        ref={ref}
      >
        {carouselImages.map(({ src, title }, index) => (
          <div
            key={src}
            sx={{
              aspectRatio: '4/3',
              gridColumn: 'auto',
              gridRow: '1/12',
              padding: '20px',
            }}
          >
            <CtaButton
              extraSx={{
                mt: 4,
                border: 'none',
                padding: 0,
                fontSize: `${isSm || isMd ? '1.125rem' : '1.25rem'}`,
                '&:hover': {
                  color: 'link',
                  border: 'none',
                },
                '&:focus': {
                  color: 'link',
                  border: 'border-0',
                },
              }}
              variant="primaryOutlined"
              onPress={() => {
                setCurrentSpotlight({
                  title: title || '',
                  image: src || '',
                  currentIndex: index + 1,
                  totalItems: carouselImages.length,
                });
                setIsModalOpen(true);
              }}
            >
              <Image
                src={src}
                alt={title}
                width={10}
                height={`${isSm ? 112 : 184}`}
                sizes="100%"
                sx={{ width: 'auto' }}
              />
            </CtaButton>
          </div>
        ))}
      </Grid>
      {Object.keys(bottomUrl).length && (
        <Flex
          extraSx={{
            justifyContent: 'flex-start',
            gridColumn: '1/12',
            marginBottom: '10px',
          }}
        >
          <Link
            to={bottomUrl?.url || ''}
            extraSx={{
              color: 'link',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '120%',
              fontSize: `${isSm ? '1.25rem' : isMd ? '1.375rem' : '1.5rem'}`,
              textDecorationLine: 'underline',
              width: '100%',
              textAlign: 'right',
            }}
          >
            {bottomUrl?.text || ''}
          </Link>
        </Flex>
      )}
      {isModalOpen && (
        <StudentSpotlightModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          img={currentSpotlight.image}
          title={currentSpotlight.title}
          description={description || ''}
          showArrows={!!currentSpotlight.currentIndex}
          index={currentSpotlight.currentIndex || -1}
          totalItems={currentSpotlight.totalItems || -1}
          onLeftArrowClick={() => {
            const { currentIndex } = currentSpotlight;
            if (currentIndex) {
              if (currentIndex === 1) {
                return;
              }
              setCurrentSpotlight({
                image: carouselImages[currentIndex - 2].src,
                title: carouselImages[currentIndex - 2].title,
                currentIndex: currentIndex - 1,
                totalItems: carouselImages.length,
              });
            }
          }}
          onRightArrowClick={() => {
            const { currentIndex } = currentSpotlight;
            if (currentIndex) {
              if (currentIndex === carouselImages.length) {
                return;
              }
              setCurrentSpotlight({
                image: carouselImages[currentIndex].src,
                title: carouselImages[currentIndex].title,
                currentIndex: currentIndex + 1,
                totalItems: carouselImages.length,
              });
            }
          }}
        />
      )}
    </Grid>
  );
};
