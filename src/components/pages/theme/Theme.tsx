import React, { FunctionComponent, useState } from 'react';
import ThemeItem from '../../theme-item/ThemeItem';
import { THEMES } from '../../../constants';

import darkTheme from '../../../img/darkTheme.jpg';
import defaultTheme from '../../../img/defaultTheme.jpg';
import simpleTheme from '../../../img/simpleTheme.jpg';

const THEME_ITEMS = [
  { name: THEMES.DEFAULT, img: defaultTheme },
  { name: THEMES.DARK, img: darkTheme },
  { name: THEMES.SIMPLE, img: simpleTheme },
];

const Theme: FunctionComponent = () => {
  const [active, setActive] = useState<string>(
    localStorage.getItem('speechTheme') || THEMES.DEFAULT
  );
  const onSetTheme = (name: string): void => {
    setActive(name);
    localStorage.setItem('speechTheme', name);
  };

  return (
    <>
      <h1>Select speech theme</h1>
      <p>
        Please choose a theme of the&nbsp;speech/interview that is convenient
        for you.
      </p>
      <div className="theme-row">
        {THEME_ITEMS.map(theme => {
          return (
            <div
              key={theme.name}
              className={`theme-col${
                active === theme.name ? ' theme-col_active' : ''
              }`}
            >
              <ThemeItem
                name={theme.name}
                pic={theme.img}
                setTheme={onSetTheme}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Theme;
