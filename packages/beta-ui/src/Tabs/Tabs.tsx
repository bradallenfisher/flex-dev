/** @jsxImportSource theme-ui */
import React, { useRef, useState, useEffect } from 'react';
import { WithChildren } from '@psu-flex/common-ui';
import { TabsProps } from './TabsTypes';
import { forwardRef } from 'react';
import { Tab } from './Tab';
import { Flex } from '@psu-flex/core-ui';
import { orientationKeyMap, sliderSx } from './TabsStyles';

export const Tabs = forwardRef(function Tabs(
  {
    activeTab,
    onChange,
    tabItems,
    orientation = 'horizontal',
    ...props
  }: WithChildren<TabsProps>,
  ref
) {
  const { extraSx, ...rest } = props;
  const [tabWidth, setTabWidth] = useState(0);
  const [tabHeight, setTabHeight] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);
  const tabRef = useRef<HTMLButtonElement>(null);

  //resize & move slider when tab is
  useEffect(() => {
    if (tabRef.current) {
      setTabWidth(tabRef.current.offsetWidth);
      setTabHeight(tabRef.current.offsetHeight);
      setTabLeft(tabRef.current.offsetLeft);
    }
  }, [activeTab, tabRef]);

  return (
    <div
      role="tablist"
      aria-labelledby="tablist-1"
      sx={{
        backgroundColor: 'limestoneMaxLight',
        p: 2,
        borderRadius: 'sm',
        ...extraSx,
      }}
      {...rest}
    >
      <Flex
        direction={orientationKeyMap[orientation] as any}
        className="relative w-fit"
      >
        {tabItems.map((item, i) => {
          return (
            <Tab
              ref={activeTab === i ? tabRef : null}
              onClick={() => onChange(i)}
              active={activeTab === i}
              id={`tab-${i + 1}`}
              aria-controls={`tabpanel-${i + 1}`}
            >
              {item.text}
            </Tab>
          );
        })}
        <span
          className="flex absolute bg-white"
          sx={{ ...sliderSx(tabLeft, tabHeight, tabWidth) }}
        />
      </Flex>
    </div>
  );
});
