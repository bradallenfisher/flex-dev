/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';

export const SliderBullets = ({ sliderData, callback, activeSlide }) => {
  return (
    <ul sx={{ mt: [5, 5, 6, 6] }} className="flex-row justify-center">
      {sliderData.map((item, i) => {
        return (
          <li
            key={i}
            sx={{ width: '24px', height: '24px', margin: 0, p: 0 }}
            className="list-none pointer relative"
          >
            <button
              tabIndex={0}
              className="outline-none block pointer"
              onClick={() => callback(i)}
              sx={{
                p: '5px',
                fontSize: 0,
                lineHeight: 0,
                backgroundColor: 'transparent',
                border: '0px',
                '&:before': {
                  display: 'block',
                  fontSize: '40px',
                  lineHeight: '24px',
                  width: 'fit-content',
                  height: '24px',
                  content: '"•"',
                  textAlign: 'center',
                  color: i === activeSlide ? 'nittanyNavy' : 'slateLight',
                },
                '&:focus-visible': {
                  border: '1px dashed #005FA9',
                },
              }}
            >
              {''}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
