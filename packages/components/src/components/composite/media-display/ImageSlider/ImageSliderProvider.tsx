import React, { createContext, useState } from 'react';

export let ImageSliderContext = createContext(null as any);

export const ImageSliderProvider = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <ImageSliderContext.Provider value={{ activeSlide, setActiveSlide }}>
      {children}
    </ImageSliderContext.Provider>
  );
};
