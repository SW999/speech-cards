import React, { Suspense } from 'react';
import Loader from '~components/loader/Loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithLoader = ({ component: Component, ...rest }) => (props?: any) => {
  const { onlyText, placeholder, ..._rest } = rest;
  return (
    <Suspense
      fallback={<Loader onlyText={onlyText} placeholder={placeholder} />}
    >
      <Component {..._rest} {...props} />
    </Suspense>
  );
};

export default WithLoader;
