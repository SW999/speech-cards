import React, {
  FunctionComponent,
  Suspense,
  lazy,
  useEffect,
  useState,
} from 'react';
import Loader from '../loader/Loader';
import { IState, LocationType } from '../../types';
import { isMobileDevice } from '../../utils';
import { CARD_HINT, CARD_TOUCH_HINT } from '../../constants';
import { useDocumentTitle } from '../../hooks';
import '../../scss/components/_card.scss';
import swipe from '../../img/swipe.svg';

const Markdown = lazy(() => import('markdown-to-jsx'));
const ProgressBar = lazy(() => import('../progress-bar/ProgressBar'));
const defaultContent = {
  name: '',
  speech: [],
  step: 0,
};
type CardType = {
  content?: IState;
  location?: LocationType;
};

const Card: FunctionComponent<CardType> = ({
  content = defaultContent,
  location,
}) => {
  const props = location?.state?.data;

  const isMobile = isMobileDevice();
  const [data, setData] = useState<IState>(
    props ? { ...props } : { ...content }
  );
  const [page, setPage] = useState<number>(-1);

  useDocumentTitle(data.name ? data.name : 'Demo');

  useEffect(() => {
    const { step } = data;
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
  }, [isMobile, page, data]);

  useEffect(() => {
    if (!props && content.speech.length < 1) {
      import('../../how_to_write_efficient_emails.json').then(demo =>
        setData({ ...demo })
      );
    }
  }, [props, content]);

  if (page < 0) {
    const { name } = data;
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
          <h2>{data.speech[page]?.title}</h2>
          <ProgressBar
            currentValue={page + 1}
            label={`${page + 1}/${data.step}`}
            radius={23}
            stroke={4}
            total={data.step}
          />
        </div>

        <div className="card-body">
          <ul>
            {data.speech[page]?.content.map(item => (
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
