import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { RedialProgressBar } from './RedialProgressBar';

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

  useEffect(() => {
    const slideCard = (e: KeyboardEvent) => {
      const code = e.code || e.which;

      if ((code === 'ArrowLeft' || code === 37) && page > -1) {
        setPage(page => --page);
      }

      if ((code === 'ArrowRight' || code === 39) && page < len - 1) {
        setPage(page => ++page);
      }
    };

    window.addEventListener('keydown', slideCard);

    return () => {
      window.removeEventListener('keydown', slideCard);
    };
  }, [page]);

  return (
    <>
      {page < 0 && <h1>{project.name}</h1>}
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
