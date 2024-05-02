'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useRef, useState } from 'react';
import { Item } from 'react-stately';

import { useBreakpoints, useToggle } from '@psu-flex/utility-hooks';

import { generateHocId } from '@psu-flex/utility-functions';
import { VisuallyHidden } from 'react-aria';

export const BrandBar = ({
  ctaItemsCollection,
  flyOutMenuNavItemsCollection,
  flyOutMenuPopularLinksItemsCollection,
}) => {
  const [isDrawerOpen, toggleIsDrawerOpen] = useToggle(false);
  const [selectedOption, setSelectedOption] = useState('Current Site');
  const [isInputFocused, toggleIsInputFocused] = useToggle(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputValid, setIsInputValid] = useState(false);
  const { isXl } = useBreakpoints();
  const hocId = generateHocId('BrandBar');
  const ctaItems = ctaItemsCollection;

  const handleInputChange = () => {
    // Check if the input has a value
    setIsInputValid(!!inputRef?.current?.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside the input
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Drop focus by blurring the input
        inputRef.current.blur();
      }
    };

    // Add event listener to detect clicks outside the input
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    // focus the search input field when drawer opens
    if (isDrawerOpen) {
      inputRef.current?.focus();
    }
  }, [isDrawerOpen]);

  const handleRadioChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
    inputRef?.current?.focus();
  };

  return (
    <div>
      {ctaItems.map((item) => {
        return item.title;
      })}
    </div>
  );
};
