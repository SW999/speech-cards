import * as React from 'react';
import { Suspense } from 'react';
import { Loading } from '../loading/Loading';

export const WithLoading = Component => <T,>(props: T) => (
  <Suspense fallback={<Loading />}>
    <Component {...(props as T)} />
  </Suspense>
);
