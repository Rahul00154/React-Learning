import React from 'react';

const Toggle = ({ flag, children }) => {
  return children(flag);
};

export default Toggle;
