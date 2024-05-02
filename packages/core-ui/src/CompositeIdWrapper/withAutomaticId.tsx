import React from 'react';

const withAutomaticId = (Component) => {
  // Define the HOC component
  const WithAutomaticId = ({ children, ...props }) => {
    // Check if the child is a valid React element and has children
    if (React.isValidElement(children)) {
      // Clone the child element and add the ID prop
      const childWithId = React.cloneElement(children, {
        id: `${Component.displayName || Component.name}-child1`,
      });
      // Return the child element with the added ID prop
      return childWithId;
    } else {
      // If the child is not a valid React element, return null or handle the case as needed
      return null;
    }
  };

  // Set the display name for easier debugging
  WithAutomaticId.displayName = `WithAutomaticId(${
    Component.displayName || Component.name
  })`;

  // Return the HOC component
  return WithAutomaticId;
};

export default withAutomaticId;
