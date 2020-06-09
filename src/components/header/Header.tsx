import * as React from 'react';
import { FunctionComponent, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobileDevice } from '../../utils/';

export const Header: FunctionComponent = () => {
  const isMobile = isMobileDevice();
  const toggleMenu = useCallback(() => {
    if (isMobile) {
      document.getElementById('pageHeader').classList.toggle('show-menu');
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      const menuBtn = document.getElementById('toggleMenu');
      menuBtn.addEventListener('click', toggleMenu);

      return (): void => menuBtn.removeEventListener('click', toggleMenu);
    }
  }, [isMobile, toggleMenu]);

  return (
    <header className="page-header" id="pageHeader" role="heading">
      {isMobile && (
        <div className="menu-toggle" id="toggleMenu" role="button">
          <span />
        </div>
      )}
      <nav role="navigation" aria-label="Main navigation">
        <NavLink exact to={`${process.env.PUBLIC_URL}`} onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}demo`} onClick={toggleMenu}>
          Demo
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}my-speeches`}
          onClick={toggleMenu}
        >
          My Speeches
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}new`} onClick={toggleMenu}>
          New
        </NavLink>
      </nav>
    </header>
  );
};
