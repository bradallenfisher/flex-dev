/** @jsxRuntime classic */
/** @jsx jsx */
import { FormLabel, jsx } from '@psu-flex/core-ui';
import { Heading, Typography } from '@psu-flex/core-ui';
import { Flex, Grid } from '@psu-flex/core-ui';
import { useFilter } from 'react-aria';
import { useState } from 'react';

export interface TableProps {
  headers: string[];
  data: {
    [key: string]: any;
  }[];
  search?: boolean;
  heading: string;
}

export const Table = ({
  headers,
  data,
  search = false,
  heading,
}: TableProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { contains } = useFilter({
    sensitivity: 'base',
  });

  const matchedData = data.filter((item) => {
    let itemMatches = false;
    Object.values(item).forEach((value) => {
      if (contains(String(value), String(searchValue))) {
        itemMatches = true;
      }
    });
    return itemMatches;
  });

  return (
    <Grid extraSx={{ ml: 9 }}>
      <Flex
        variant="col"
        extraSx={{
          gridColumn: ['1/5', '1/8', '1/13', '1/13'],
        }}
      >
        <Heading variant={28} extraSx={{ mt: 12 }} color="beaverBlue">
          {heading}
        </Heading>
      </Flex>
      {search && (
        <Flex
          extraSx={{
            flexDirection: 'column',
            gridColumn: '1/6',
            mb: 4,
          }}
        >
          <FormLabel>Enter Search Term</FormLabel>
          <input
            id="form-field-input"
            type="text"
            sx={{
              width: '65%',
              height: '2.2rem',
              padding: '.4rem',
            }}
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Flex>
      )}
      <Grid
        extraSx={{
          gridColumn: ['1/5', '1/8', '1/13', '1/13'],
          gridTemplateColumns: [
            `repeat(${headers.length}, 200px)`,
            `repeat(${headers.length}, 200px)`,
            `repeat(${headers.length}, 1fr)`,
            `repeat(${headers.length}, 1fr)`,
          ],
          overflowX: 'scroll',
          overflowY: 'visible',
          gap: 0,
          mb: 4,
        }}
      >
        {headers.map((item) => (
          <Flex
            extraSx={{
              borderBottom: '1px',
              borderColor: 'beaverBlue',
              p: 4,
              pb: 0,
            }}
            key={item}
          >
            <Heading
              color="potentialMidnight"
              variant={16}
              extraSx={{ height: 48 }}
            >
              {item}
            </Heading>
          </Flex>
        ))}
        {matchedData.map((item, idx: number) =>
          Object.values(item).map((value: string) => (
            <div>
              <hr />
              <Flex
                extraSx={{
                  borderBottom: idx < data.length - 1 ? '1px' : 0,
                  borderColor: 'beaverBlue',
                  p: 4,
                }}
              >
                <Typography extraSx={{ height: 24, fontSize: 16 }}>
                  {value}
                </Typography>
              </Flex>
            </div>
          ))
        )}
      </Grid>
    </Grid>
  );
};
