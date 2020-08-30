import React, { FunctionComponent } from 'react';
import '../../scss/components/_loader.scss';

type LoaderProps = {
  onlyText?: boolean;
  placeholder?: string;
};

const Loader: FunctionComponent<LoaderProps> = ({
  onlyText = false,
  placeholder = 'Loading...',
}) => {
  return (
    <div className="loader-wrapper">
      {onlyText ? (
        <h1>{placeholder}</h1>
      ) : (
        <svg
          className="loader"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 320"
        >
          <circle cx="160" cy="160" r="140" stroke="#BD4E31" />
          <circle cx="160" cy="160" r="115" stroke="#f6ce4b" />
          <circle cx="160" cy="160" r="90" stroke="#1998d3" />
          <circle cx="160" cy="160" r="65" stroke="#2b2b2b" />
        </svg>
      )}
    </div>
  );
};

export default Loader;
