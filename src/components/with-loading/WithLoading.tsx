import React, { Suspense } from 'react';
import Loading from '../loading/Loading';

const WithLoading = ({ component: Component, ...rest }) => (props?: any) => (
  <Suspense fallback={<Loading />}>
    <Component {...rest} {...props} />
  </Suspense>
);

export default WithLoading;
