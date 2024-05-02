/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useRef, useState } from 'react';
import { useFilter, useTextField } from 'react-aria';
import { useToggle } from '@psu-flex/utility-hooks';
import { Flex } from '../../layout';
import { FormLabel } from '../index';
import { FilterProps } from './FilterTypes';
import {
  formFilterSizeObj,
  getFilterSx,
  getFilterBorderSx,
} from './FilterStyles';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';
import { mergeSx } from '@psu-flex/utility-functions';

export const Filter = <T,>({
  label,
  description,
  fieldSize = 'sm',
  data,
  filterCallback,
  filterBy = 'allData',
  ...props
}: FilterProps<T>) => {
  const [isFilterFocused, toggleIsFilterFocused] = useToggle(false);
  const ref = useRef(null);
  const { labelProps, descriptionProps } = useTextField(props as any, ref);
  const { contains } = useFilter({ sensitivity: 'base' });
  const [value, setValue] = useState('');
  const [matchedComposers, setMatchedComposers] = useState([]);
  const [previousMatchedComposers, setPreviousMatchedComposers] = useState([]);
  const { extraSx, ...rest } = props;

  useEffect(() => {
    //@ts-ignore
    const newMatchedComposers = data.filter((composer) => {
      if (filterBy && typeof filterBy === 'string' && filterBy !== 'allData') {
        return contains(composer[String(filterBy)], value);
      } else if (filterBy && Array.isArray(filterBy)) {
        for (const filterValue of filterBy) {
          if (
            typeof composer[filterValue] === 'string' &&
            (composer[filterValue] as string)
              .toLowerCase()
              .includes(value.toLowerCase())
          ) {
            console.log('hit');
            return true; // If found, include the composer in filtered array
          }
        }
      } else {
        for (const key in composer) {
          // Check if the property value includes the search value
          if (
            typeof composer[key] === 'string' &&
            (composer[key] as string)
              .toLowerCase()
              .includes(value.toLowerCase())
          ) {
            return true; // If found, include the composer in filtered array
          }
        }
        return false; // If no match found in any property, exclude the composer
      }
    });
    //@ts-ignore
    setMatchedComposers(newMatchedComposers);
  }, [data, value, contains, filterBy]);

  useEffect(() => {
    // Compare previous and current matchedComposers to avoid endless loop
    if (
      JSON.stringify(previousMatchedComposers) !==
      JSON.stringify(matchedComposers)
    ) {
      //@ts-ignore
      filterCallback(matchedComposers);
      setPreviousMatchedComposers(matchedComposers);
    }
  }, [matchedComposers, filterCallback, previousMatchedComposers]);

  //merge styling
  const inputSx = mergeSx(
    formFilterSizeObj[fieldSize],
    getFilterBorderSx(props, isFilterFocused),
    getFilterSx(fieldSize, props),
    extraSx
  );

  return (
    <Flex className="w-fit" gap={1} direction="column">
      {/* label */}
      <FormLabel htmlFor="form-field-input" {...labelProps}>
        {label
          ? label
          : `Filter by ${
              Array.isArray(filterBy)
                ? filterBy.map((filter) => filter.toString()).join(' & ')
                : filterBy !== 'allData'
                ? filterBy.toString()
                : 'keyword'
            }`}
      </FormLabel>
      <input
        placeholder={props.placeholder || 'Search by keyword...'}
        type="search"
        id="Filter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-labelledby={`${label}-filter-field`}
        sx={{
          ...inputSx,
        }}
        onFocus={toggleIsFilterFocused}
        onBlur={toggleIsFilterFocused}
        {...rest}
      />
      {/* conditional description message */}
      {description && (
        <FormFieldDescription descriptionProps={descriptionProps}>
          {description}
        </FormFieldDescription>
      )}
    </Flex>
  );
};
