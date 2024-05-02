/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import heroImage from './assets/hero-image.svg';
import heroBg from './assets/hero-bg.svg';

import {
  DisplayHeading,
  Select,
  Heading,
  RadioItem,
  RadioGroup,
} from '@psu-flex/psu-global-ui';
import { Flex, Grid } from '@psu-flex/psu-global-ui';
import { useBreakpoints, useMediaQuery } from '@psu-flex/utility-hooks';
import { Item } from 'react-stately';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

interface ILocation {
  id: number;
  name: string;
}

export interface HeroCareersProps {
  title?: string;
  image?: string;
  subHeading?: string;
  locations: ILocation[];
  onTypeChange?: (type: string) => void;
  onLocationChange?: (location: string) => void;
}

export const HeroCareers = ({
  title,
  image,
  subHeading,
  locations,
  onTypeChange,
  onLocationChange,
}: HeroCareersProps) => {
  const defaultFilter = 'staff';
  const { isSm, isMd, isLg, isXl, is2xl } = useBreakpoints();
  const methods = useForm({});
  const errors = {};
  const isMediumTablet = useMediaQuery(
    '(min-width: 531px) and (max-width: 600px)'
  );
  const isSmallTablet = useMediaQuery(
    '(min-width: 361px) and (max-width: 530px)'
  );

  const handleTypeChange = (event: string | boolean) => {
    const e = { target: { event } };
    if (onTypeChange) {
      onTypeChange(event.toString());
    }
    return {
      target: e.target,
      name: '',
    };
  };

  const handleLocationChange = (selectedId: number) => {
    const foundLocation = locations.find(
      ({ id }: ILocation) => id === Number(selectedId)
    );
    if (onLocationChange) {
      onLocationChange(foundLocation?.name || '');
    }
  };

  return (
    <Flex
      extraSx={{
        flexDirection: `${isSm || isMd ? 'column-reverse' : 'row'}`,
        margin: `${
          isSm ? '32px 32px 16px 32px' : isMd ? '0px 0px' : '32px 0px 16px 32px'
        }`,
        backgroundColor: 'white',
        height: `${isSm || isMd ? 'auto' : '400px'}`,
      }}
    >
      <Flex
        variant="col"
        extraSx={{
          width: '100%',
          margin: `${isMd ? '10px 32px' : '10px 30px 10px 0px'}`,
        }}
        wrap={false}
      >
        <Flex
          extraSx={{
            width: `${is2xl ? '55%' : isXl ? '80%' : '100%'}`,
            flexDirection: 'column',
            '@media (min-width: 1440px) and (max-width: 1540px)': {
              width: '75%',
            },
          }}
        >
          <Heading extraSx={{ mb: 2, color: 'beaverBlue' }} variant={20}>
            {subHeading}
          </Heading>
          <DisplayHeading
            variant={56}
            extraSx={{
              mb: 4,
              mt: 4,
              color: 'beaverBlue',
              fontSize: '2rem',
            }}
          >
            {title}
          </DisplayHeading>
        </Flex>
        <form
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
          sx={{
            display: 'flex',
            width: `${isSm ? '100%' : isMd ? 'calc(100% - 32px)' : '100%'}`,
            flexDirection: `${isSm || isMd ? 'column' : 'row'}`,
            backgroundColor: 'slateMaxLight',
            padding: '30px 20px',
            marginTop: `${isSm || isMd ? '0px' : isLg ? '70px' : '60px'}`,
            alignItems: `${isSm || isMd ? 'baseline' : 'end'}`,
          }}
        >
          <RadioGroup
            defaultValue={defaultFilter}
            label="FILTERS"
            labelStyles={{
              color: 'beaverBlue',
              fontSize: '18px',
              marginBottom: '10px',
              fontWeight: '700',
              lineHeight: '140%',
            }}
            extraSx={{
              width: `${isSm || isMd || isLg ? '100%' : '25%'}`,
              '@media screen and (min-width: 768px) and (max-width: 893px)': {
                width: '80%',
              },
              '@media screen and (min-width: 894px) and (max-width: 1087px)': {
                width: '55%',
              },
              '@media screen and (min-width: 1088px) and (max-width: 1360px)': {
                width: '38%',
              },
            }}
            {...methods.register('hero_careers_filter')}
            onChange={(e) => {
              methods
                .register('hero_careers_filter')
                .onChange(handleTypeChange(e));
            }}
          >
            <RadioItem value="staff">Staff Positions</RadioItem>
            <RadioItem value="student">Student Positions</RadioItem>
          </RadioGroup>

          <Select
            errors={errors}
            defaultPlaceholder="Location"
            name="navSelect"
            items={locations}
            selectClassName={{
              marginLeft: '25px',
              marginTop: `${isSm || isMd || isLg ? '20px' : '0'}`,
              width: `${isSm || isMd ? '90%' : '70%'}`,
            }}
            buttonClassName={{
              minWidth: '120px !important',
            }}
            onSelectionChange={(selected: number) =>
              handleLocationChange(selected)
            }
          >
            {(item: ILocation) => (
              <Item textValue={item.name} key={item.id}>
                {item.name}
              </Item>
            )}
          </Select>
        </form>
      </Flex>
      <Grid
        extraSx={{
          width: '100%',
        }}
      >
        {!isSm && (
          <div
            sx={{
              gridColumn: `${isMd ? '2/12' : '2/13'}`,
              gridRow: `${isLg || isXl ? '1/12' : '1/6'}`,
            }}
          >
            <Image
              height={
                isXl
                  ? 500
                  : isSmallTablet
                  ? 375
                  : isMediumTablet
                  ? 450
                  : isMd || isLg
                  ? 400
                  : 400
              }
              width={10}
              sx={{
                width: '100%',
                marginTop: `${isXl ? '-60px' : '0px'}`,
              }}
              src={heroBg}
              alt="Hero background"
            />
          </div>
        )}
        <div
          sx={{
            gridColumn: `${isSm || isMd ? '1/12' : '2/13'}`,
            gridRow: `${isLg || isXl ? '1/12' : '1/6'}`,
            marginBottom: `${isSm || isMd ? '0px' : '40px'}`,
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
          }}
        >
          <Image
            height={10}
            width={10}
            objectFit="cover"
            sx={{
              padding: `${isMd ? '30px 32px 0px 32px' : '0px'}`,
              width: '100%',
              height: `${
                isSm
                  ? 'auto'
                  : isMediumTablet
                  ? '400px'
                  : isLg
                  ? '400px'
                  : '380px'
              }`,

              zIndex: 1000,
            }}
            src={image ?? heroImage}
            alt="Hero Image"
          />
        </div>
      </Grid>
    </Flex>
  );
};
