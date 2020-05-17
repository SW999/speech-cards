import * as React from 'react';
import { FunctionComponent, lazy, Suspense, useEffect, useState } from 'react';
import { IState } from '../../../types/';
import { checkTouch } from '../../../utils/';
import swipe from '../../../img/swipe.svg';

const Markdown = lazy(() => import('markdown-to-jsx'));
const RedialProgressBar = lazy(() =>
  import('../../radial-progress-bar/RedialProgressBar')
);
const TOUCH_HINT = 'Please use swipe to turn cards!';
const HINT = 'Please use left/right arrows to turn cards!';

export const Card: FunctionComponent<IState> = ({ name, step, speech }) => {
  const [page, setPage] = useState<number>(-1);
  const isTouchExist: boolean = checkTouch();

  useEffect(() => {
    const moveLeft = (): void => setPage(page => (page > -1 ? page - 1 : -1));

    const moveRight = (): void =>
      setPage(page => (page < step - 1 ? page + 1 : step - 1));

    if (isTouchExist) {
      document.addEventListener('swipeLeft', moveRight);
      document.addEventListener('swipeRight', moveLeft);

      return (): void => {
        document.removeEventListener('swipeLeft', moveRight);
        document.removeEventListener('swipeRight', moveLeft);
      };
    }

    const slideCard = (e: KeyboardEvent): void => {
      const code = e.code || e.which;

      if (code === 'ArrowLeft' || code === 37) {
        moveLeft();
      }

      if (code === 'ArrowRight' || code === 39) {
        moveRight();
      }
    };
    document.addEventListener('keydown', slideCard);

    return (): void => {
      document.removeEventListener('keydown', slideCard);
    };
  }, [isTouchExist, page, speech, step]);

  if (page < 0) {
    return (
      <>
        <div className="card-hint">
          {isTouchExist ? (
            <>
              <img src={swipe} alt="Navigation hint" width="30" height="30" />
              {}
              {TOUCH_HINT}
            </>
          ) : (
            HINT
          )}
        </div>
        <h1 className="card-title">{name}</h1>
      </>
    );
  }

  return (
    <Suspense fallback="Loading...">
      <div className="card-header">
        <h2>{speech[page].title}</h2>
        <RedialProgressBar
          currentValue={page + 1}
          total={step}
          label={`${page + 1}/${step}`}
        />
      </div>
      <div className="card-body">
        <ul>
          {speech[page].content.map(item => (
            <li key={item}>
              <Markdown children={item} />
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
};
