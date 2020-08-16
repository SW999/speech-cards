import React, {
  FunctionComponent,
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';
import Loader from '../../loader/Loader';
import { IState } from '../../../types/';
import { isMobileDevice } from '../../../utils/';
import { CARD_TOUCH_HINT, CARD_HINT, THEMES } from '../../../constants';
import swipe from './swipe.svg';

const Markdown = lazy(() => import('markdown-to-jsx'));
const RedialProgressBar = lazy(() =>
  import('../../radial-progress-bar/RedialProgressBar')
);

const Card: FunctionComponent<IState> = ({ name, step, speech }) => {
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

  useEffect(() => {
    const CURRENT_THEME = localStorage.getItem('speechTheme') || THEMES.DEFAULT;
    document.body.classList.add(`${CURRENT_THEME}-theme`);

    return () => {
      document.body.classList.remove(`${CURRENT_THEME}-theme`);
    };
  }, []);

  if (page < 0) {
    return (
      <>
        <div className="card-hint" data-testid="card-hint">
          {isMobile ? (
            <>
              <img src={swipe} alt="Navigation hint" width="30" height="30" />
              {}
              {CARD_TOUCH_HINT}
            </>
          ) : (
            CARD_HINT
          )}
        </div>
        <h1 className="card-title">{name}</h1>
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
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
    </>
  );
};

export default Card;
