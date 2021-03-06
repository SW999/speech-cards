import React, { FunctionComponent, useState } from 'react';
import { THEMES } from '~constants';
import { useDocumentTitle } from '~hooks';
import '~scss/components/_theme.scss';

import darkTheme from '~img/darkTheme.jpg';
import defaultTheme from '~img/defaultTheme.jpg';
import simpleTheme from '~img/simpleTheme.jpg';

const THEME_ITEMS = [
  { name: THEMES.DEFAULT, img: defaultTheme },
  { name: THEMES.DARK, img: darkTheme },
  { name: THEMES.SIMPLE, img: simpleTheme },
];

const Theme: FunctionComponent = () => {
  const [active, setActive] = useState<string>(
    document.body.dataset.theme || THEMES.DEFAULT
  );
  useDocumentTitle('Theme');

  const onSetTheme = (name: string): void => {
    if (name === active) return;

    setActive(name);
  };

  React.useEffect(() => {
    document.body.dataset.theme = active;
  }, [active]);

  return (
    <>
      <h1>Select speech theme</h1>
      <p>
        Please choose a theme of the&nbsp;speech/interview that is convenient
        for you.
      </p>
      <div className="theme-row">
        {THEME_ITEMS.map(theme => {
          const { name, img } = theme;
          return (
            <div
              key={name}
              className={`theme-col${
                active === name ? ' theme-col_active' : ''
              }`}
              onClick={() => onSetTheme(name)}
              data-testid={name}
            >
              <img
                alt={`${name} theme`}
                className="theme"
                src={img}
                title={`${name} theme`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Theme;
