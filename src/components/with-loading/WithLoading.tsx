import React, { Suspense } from 'react';
import Loading from '../loading/Loading';

const WithLoading = ({ component: Component, ...rest }) => (
  <Suspense fallback={<Loading />}>
    <Component {...rest} />
  </Suspense>
);

export default WithLoading;
