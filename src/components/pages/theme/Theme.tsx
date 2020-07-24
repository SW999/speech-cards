import * as React from 'react';
import { FunctionComponent } from 'react';

export const Theme: FunctionComponent = () => {
  return (
    <>
      <h1>Select speech theme</h1>
      <div className="theme-row">
        <div className="theme-col">
          <div className="theme">1</div>
        </div>
        <div className="theme-col">
          <div className="theme">2</div>
        </div>
        <div className="theme-col">
          <div className="theme">3</div>
        </div>
        <div className="theme-col">
          <div className="theme">4</div>
        </div>
      </div>
    </>
  );
};
