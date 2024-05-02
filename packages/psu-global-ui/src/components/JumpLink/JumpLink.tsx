/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from "react";
import { Flex, Grid, Heading, Link, jsx } from '@psu-flex/psu-global-ui';
import { ExpandMore } from './ExpandMore';
import { ArrowRight } from "./ArrowRight";
import { useBreakpoints } from '@psu-flex/utility-hooks';

interface JumpLinkItem {
  title: string;
  url: string;
}
export interface JumpLinkProps {
  children?: React.ReactNode;
  image?: string;
  title: string;
  links: JumpLinkItem[];
}

export const JumpLink = ({ image, title, links }: JumpLinkProps) => {
  const { isSm } = useBreakpoints();

  return (
    <div sx={{position: 'sticky', zIndex: 1, top: 0}}>
    <Grid
      extraSx={{
        padding: '8px 16px',
        alignSelf: 'stretch',
        width: 308,
        backgroundColor: isSm ? '#CCF0FF' : '#FFF',
        gap: 0,
      }}
    >
      <Flex
        extraSx={{
          gridColumn: ['1 / 6', '1 / 6', '1 / 6', '1 / 6'],
          gridRow: ['2/2', '2/2', '1/2', '1/2'],
        }}
        >
          <Heading variant={18}
            extraSx={{
              color: 'beaverBlue',
              fontFamily: 'condensed',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '150%',
            }}>
            {title}
          </Heading>
      </Flex>
      <Flex
        extraSx={{
          gridColumn: ['7 / 9', '7 / 9', '12 / 13', '12 / 13'],
          gridRow: ['2/2', '2/2', '1/2', '1/2']
        }}
      >
        {isSm ? <ExpandMore /> : <ArrowRight />}
      </Flex>
    </Grid>
    <Grid
     extraSx={{
      padding: '8px 16px',
      alignSelf: 'stretch',
      width: 308,
      backgroundColor: '#FFF',
    }}
    >
    {
      links.map((link: JumpLinkItem) => (
        <Link
            to={link.url}
            extraSx={{
              gridColumn: ['1 / 9', '1 / 9', '1 / 12', '1 / 12'],
              color: 'link',
              fontFamily: 'condensed',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%',
              fontSize: '16px',
              padding: '4px 0',
            }}
          >
            {isSm &&
              <p
                sx={{
                  color: 'beaverBlue',
                  fontSize: '12px',
                  fontWeight: 700,
                  lineHeight: '150%',
                }}
              >
                Jump to
              </p>
            }
            {link.title}
          </Link>
      ))
    }
    </Grid>
    </div>
  );
};
