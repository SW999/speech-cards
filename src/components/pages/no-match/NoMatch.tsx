import * as React from 'react';
import { FunctionComponent } from 'react';

export const NoMatch: FunctionComponent = () => {
  return (
    <div className="no-match-wrapper">
      <h1>404</h1>
      <h2>Ups, not found!</h2>
    </div>
  );
};
