import React from 'react';

export const ResultData = ({ data }) => {
  console.log(data);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
