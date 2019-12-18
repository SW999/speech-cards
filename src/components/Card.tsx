import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { RedialProgressBar } from './RedialProgressBar';
import { checkTouch } from '../utils';

interface NameProp {
  name: string;
}
interface StepProps {
  [key: string]: {
    title: string;
    content: string;
  };
}
type projectProps = NameProp & StepProps;
//   {
//   name: string;
// } & {
//   [key: string]: {
//     title: string;
//     content: string;
//   };
// };

export const Card: FunctionComponent<projectProps> = ({ project }) => {
  const [page, setPage] = useState<number>(0);
  const len = Object.keys(project).length - 1;
  const isTouchExist = checkTouch();

  useEffect(() => {
    const moveLeft = () => {
      if (page > 0) {
        setPage(page => --page);
      }
    };
    const moveRight = () => {
      if (page < len) {
        setPage(page => ++page);
      }
    };

    if (isTouchExist) {
      document.addEventListener('swipeLeft', moveRight);
      document.addEventListener('swipeRight', moveLeft);

      return () => {
        document.removeEventListener('swipeLeft', moveRight);
        document.removeEventListener('swipeRight', moveLeft);
      };
    } else {
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
    }
  }, [page]);

  return (
    <>
      {page < 1 && <h1 className="card-title">{project['name']}</h1>}
      {page > 0 && (
        <>
          <div className="card-header">
            <h2>{project[`step${page}`].title}</h2>
            <RedialProgressBar
              current={page}
              total={len}
              label={`${page}/${len}`}
            />
          </div>
          <div className="card-body">
            <Markdown children={project[`step${page}`].content} />
          </div>
        </>
      )}
    </>
  );
};
