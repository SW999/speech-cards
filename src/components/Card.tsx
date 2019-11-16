import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { RedialProgressBar } from './RedialProgressBar';
import { checkTouch } from '../utils';

type projectProps = {
  name: string;
  speech: {
    title: string;
    content: string;
  }[];
};

type projectObject = {
  [key: string]: projectProps;
};

export const Card: FunctionComponent<projectObject> = ({ project }) => {
  const [page, setPage] = useState<number>(-1);
  const len = project.speech.length;
  const isTouchExist = checkTouch();

  useEffect(() => {
    const moveLeft = () => {
      if (page > -1) {
        setPage(page => --page);
      }
    };
    const moveRight = () => {
      if (page < len - 1) {
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
      {page < 0 && <h1 className="card-title">{project.name}</h1>}
      {page >= 0 && (
        <>
          <div className="card-header">
            <h2>{project.speech[page].title}</h2>
            <RedialProgressBar
              current={page + 1}
              total={len}
              label={`${page + 1}/${len}`}
            />
          </div>
          <div className="card-body">
            <Markdown children={project.speech[page].content} />
          </div>
        </>
      )}
    </>
  );
};
