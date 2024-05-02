import React from 'react';

export const copyToken = (token) => {
  // Check if the Clipboard API is supported
  if (!navigator.clipboard) {
    console.error('Clipboard API not supported');
    return;
  }

  // Write the token to the clipboard
  navigator.clipboard.writeText(token).catch((error) => {
    console.error('Error copying token to clipboard:', error);
  });
};
