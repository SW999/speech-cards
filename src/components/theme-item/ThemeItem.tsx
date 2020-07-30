import React, { FunctionComponent } from 'react';

type ThemeItemType = {
  name: string;
  pic: string;
  setTheme: (name: string) => void;
};

const ThemeItem: FunctionComponent<ThemeItemType> = ({
  name,
  pic,
  setTheme,
}) => {
  const onSetTheme = (): void => setTheme(name);

  return (
    <img
      alt={`${name} theme`}
      className="theme"
      onClick={onSetTheme}
      src={pic}
      title={`${name} theme`}
    />
  );
};

export default ThemeItem;
