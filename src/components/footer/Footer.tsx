import React, { FunctionComponent } from 'react';
import github from '~img/github.svg';

const version =
  process.env.NODE_ENV === 'test' ? '1.0.0' : process.env.npm_package_version;

const Footer: FunctionComponent = () => (
  <div className="footer" role="contentinfo">
    <a
      className="git"
      href="https://github.com/SW999/speech-cards"
      rel="nofollow"
      title="Github page"
    >
      <img src={github} alt="github" width="24" height="24" />
    </a>
    Siarhei Vaitehovich
    <span className="divider" />
    {`v. ${version}`}
    <span className="divider" />
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

export default Footer;
