import * as React from 'react';
import { FunctionComponent } from 'react';

type ThemeItemType = {
  name: string;
  pic: string;
  setTheme: (name: string) => void;
};

export const ThemeItem: FunctionComponent<ThemeItemType> = ({
  name,
  pic,
  setTheme,
}) => {
  const onSetTheme = (): void => setTheme(name);

  return (
    <img
      src={pic}
      className="theme"
      alt={`${name} theme`}
      onClick={onSetTheme}
    />
  );
};
