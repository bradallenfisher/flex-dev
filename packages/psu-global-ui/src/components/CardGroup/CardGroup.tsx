/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useListState } from 'react-stately';
import React, { cloneElement, useRef } from 'react';
import {
  BackgroundWrapper,
  Grid,
  useComponentIntro,
  Wrapper,
  ComponentIntro,
  Container,
} from '@psu-flex/core-ui';
import { CardGroupProps } from './CardGroupTypes';
import { gapSizeKeyMap, twoCardGridItemSx } from './CardGroupStyles';

export function CardItem({ item, columnSpan, state, ...props }: any) {
  let ref = useRef(null);

  //send props to the unknown cards
  const childrenWithProps = cloneElement(item.rendered, {
    ref: ref,
    ...props,
    'aria-describedby': item?.rendered?.type?.render?.name,
    sx: {
      gridColumn: columnSpan.map
        ? columnSpan.map((span: any) => `auto / span ${span}`)
        : `auto / span ${columnSpan}`,
    },
    columnSpan: columnSpan,
  });
  return childrenWithProps;
}

export function CardGroup<T>({
  columnSpan,
  backgroundColor = 'white',
  gapSize = 'sm',
  container = true,
  totalGridColumns,
  ...props
}: CardGroupProps<T>) {
  let state = useListState({
    ...props,
    items: props.cards.map((item: any, index: number) => ({
      ...item,
      key: `${index}`,
    })),
  });

  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);

  //pull out items so rest of props can be spread
  const { items, ...rest } = props;

  const gridContent = (
    //@ts-ignore
    <Grid
      totalGridColumns={totalGridColumns && totalGridColumns}
      className="items-stretch"
      extraSx={{
        rowGap: gapSizeKeyMap[gapSize],
      }}
      {...rest}
    >
      {/* @ts-ignore */}
      {state.collection.size === 2 && columnSpan < 6 ? (
        /* case where there is only 2 cards */
        <div sx={{ ...twoCardGridItemSx }}>
          {[...state.collection].map((item) => (
            <CardItem
              columnSpan={columnSpan}
              state={state}
              key={item.key}
              item={item}
            />
          ))}
        </div>
      ) : (
        <>
          {/* standard case */}
          {[...state.collection].map((item) => (
            <CardItem
              columnSpan={columnSpan}
              state={state}
              key={item.key}
              item={item}
            />
          ))}
        </>
      )}
    </Grid>
  );

  // Render with wrappers if container is true
  if (container) {
    return (
      <BackgroundWrapper variant={backgroundColor}>
        <Container>
          <Wrapper>
            {componentIntroProps && (
              <ComponentIntro
                {...componentIntroProps}
                numberOfCards={state.collection.size}
              />
            )}
            {gridContent}
          </Wrapper>
        </Container>
      </BackgroundWrapper>
    );
  }

  // Render without wrappers if container is false
  return (
    <>
      {componentIntroProps && (
        <ComponentIntro
          {...componentIntroProps}
          numberOfCards={state.collection.size}
        />
      )}
      {gridContent}
    </>
  );
}
