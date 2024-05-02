/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Body } from '@psu-flex/core-ui';
import { Section, Grid, Container, Wrapper } from '@psu-flex/core-ui';
import { BlockQuoteProps } from './BlockQuoteTypes';
import {
  gridItemSx,
  imageSx,
  nameSx,
  quoteSvgSx,
  quoteSx,
} from './BlockQuoteStyles';
import { QuoteSvg } from './QuoteSvg';

export const BlockQuote = ({
  quote,
  name,
  details,
  imageSrc,
  imageAlt,
}: BlockQuoteProps) => {
  return (
    <Section extraSx={{ py: [10, 10, 11, 11], backgroundColor: 'nittanyNavy' }}>
      <Container>
        <Wrapper>
          <Grid extraSx={{ rowGap: [0, 0, 0, 0] }}>
            <div
              className="relative flex"
              sx={{
                ...gridItemSx(imageSrc),
              }}
            >
              {imageSrc && (
                <img
                  className="object-cover"
                  sx={{ ...imageSx }}
                  alt={imageAlt ? imageAlt : ''}
                  src={imageSrc}
                />
              )}
              <QuoteSvg
                extraSx={{
                  ...quoteSvgSx(imageSrc),
                }}
              />
            </div>
            <blockquote
              className="flex-col"
              sx={{
                m: 0,
                gridColumn: ['1/5', '2/8', '3/13', imageSrc ? '4/12' : '3/12'],
              }}
            >
              <p sx={{ ...quoteSx }}>{quote}</p>
              <p
                sx={{
                  ...nameSx,
                }}
              >
                {name}
              </p>
              <Body color="white" variant={16}>
                {details}
              </Body>
            </blockquote>
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  );
};
