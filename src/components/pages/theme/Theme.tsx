import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { ThemeItem } from '../../theme-item/ThemeItem';
import alternativeTheme from '../../../img/alternativeTheme.jpg';
import darkTheme from '../../../img/darkTheme.jpg';
import defaultTheme from '../../../img/defaultTheme.jpg';
import simpleTheme from '../../../img/simpleTheme.jpg';

const THEMES = [
  { name: 'default', img: defaultTheme },
  { name: 'dark', img: darkTheme },
  { name: 'simple', img: simpleTheme },
  { name: 'alternative', img: alternativeTheme },
];

export const Theme: FunctionComponent = () => {
  const [active, setActive] = useState<string>(
    localStorage.getItem('speech_theme') || 'default'
  );
  const onSetTheme = (name: string): void => {
    setActive(name);
    localStorage.setItem('speech_theme', name);
  };

  return (
    <>
      <h1>Select speech theme</h1>
      <p>
        Please choose a theme for displaying the speech/interview that is
        convenient for you.
      </p>
      <div className="theme-row">
        {THEMES.map(theme => {
          return (
            <div
              key={theme.name}
              className={`theme-col${
                active === theme.name ? ' active-theme' : ''
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
