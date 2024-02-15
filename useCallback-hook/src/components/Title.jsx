import React from 'react';

const Title = () => {
  console.log('Title Component rendered');
  return <h1>useCallback Hook</h1>;
};

export default React.memo(Title);
