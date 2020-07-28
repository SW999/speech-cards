import * as React from 'react';
import { FunctionComponent } from 'react';
import { version } from '../../../package.json';
import github from '../../img/github.svg';

export const Footer: FunctionComponent = () => (
  <div className="footer">
    <a
      href="https://github.com/SW999/speech-cards"
      rel="nofollow"
      title="Github page"
    >
      <img src={github} alt="github" width="24" height="24" />
    </a>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;© SW999
    2020&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    {`v. ${version}`}
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a
      href="mailto:swarog2002@mail.ru?subject=Speech%20cards"
      target="_blank"
      rel="noopener noreferrer"
      title="Email me"
    >
      <span role="img" aria-label="email me">
        📧
      </span>
    </a>
  </div>
);
