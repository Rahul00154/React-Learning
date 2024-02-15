import React from 'react';

const Display = ({ text, displayValue }) => {
  console.log('Display Component rendered', displayValue);
  return (
    <p>
      This person {text} is {displayValue}
    </p>
  );
};

export default React.memo(Display);
