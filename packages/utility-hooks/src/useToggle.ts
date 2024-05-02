import { useState, useCallback } from 'react';

export const useToggle = (defaultValue: boolean | any) => {
  const [value, setValue] = useState(defaultValue);

  // Memoize the toggleValue function with useCallback
  const toggleValue = useCallback(
    (newValue: boolean) => {
      setValue((currentValue: boolean) =>
        typeof newValue === 'boolean' ? newValue : !currentValue
      );
    },
    [] // No dependencies needed for useCallback in this case
  );

  return [value, toggleValue];
};
