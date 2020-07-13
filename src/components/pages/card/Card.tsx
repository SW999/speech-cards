import * as React from 'react';
import { FunctionComponent, lazy, Suspense, useEffect, useState } from 'react';
import { Loading } from '../../loading/Loading';
import { IState } from '../../../types/';
import { isMobileDevice } from '../../../utils/';
import swipe from './swipe.svg';

const Markdown = lazy(() => import('markdown-to-jsx'));
const RedialProgressBar = lazy(() =>
  import('../../radial-progress-bar/RedialProgressBar')
);
const TOUCH_HINT = 'Please use swipe to turn cards!';
const HINT = 'Please use left/right arrows to turn cards!';

export const Card: FunctionComponent<IState> = ({ name, step, speech }) => {
  const isMobile = isMobileDevice();
  const [page, setPage] = useState<number>(-1);

  useEffect(() => {
    const moveLeft = () => setPage(page => (page > -1 ? page - 1 : -1));

    const moveRight = () =>
      setPage(page => (page < step - 1 ? page + 1 : page));

    if (isMobile) {
      document.addEventListener('swipeLeft', moveRight);
      document.addEventListener('swipeRight', moveLeft);

      return () => {
        document.removeEventListener('swipeLeft', moveRight);
        document.removeEventListener('swipeRight', moveLeft);
      };
    }

    const slideCard = (e: KeyboardEvent) => {
      const code = e.code || e.which;

      if (code === 'ArrowLeft' || code === 37) {
        moveLeft();
      }

      if (code === 'ArrowRight' || code === 39) {
        moveRight();
      }
    };
    document.addEventListener('keydown', slideCard);

    return () => {
      document.removeEventListener('keydown', slideCard);
    };
  }, [isMobile, page, speech, step]);

  if (page < 0) {
    return (
      <>
        <div className="card-hint" data-testid="card-hint">
          {isMobile ? (
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
    <Suspense fallback={<Loading />}>
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
