import * as React from 'react';
import { FunctionComponent } from 'react';
import packageJson from '../../../package.json';
import github from '../../img/github.svg';

export const Footer: FunctionComponent = () => (
  <div className="footer">
    <a
      href="https://github.com/SW999/speech-cards"
      rel="nofollow"
      title="Github page"
    >
      <img src={github} alt="github" width="24" height="24" />
    </a>{' '}
    © SW999 2020 | {`v. ${packageJson.version}`}
  </div>
);
