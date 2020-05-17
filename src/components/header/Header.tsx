import * as React from 'react';
import { FunctionComponent, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { checkTouch } from '../../utils/';

export const Header: FunctionComponent = () => {
  const isTouch = checkTouch();
  const toggleMenu = useCallback(() => {
    if (isTouch) {
      document.getElementById('pageHeader').classList.toggle('show-menu');
    }
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) {
      const menuBtn = document.getElementById('toggleMenu');
      menuBtn.addEventListener('click', toggleMenu);

      return (): void => menuBtn.removeEventListener('click', toggleMenu);
    }
  }, [isTouch, toggleMenu]);

  return (
    <header className="page-header" id="pageHeader" role="heading">
      {isTouch && (
        <div className="menu-toggle" id="toggleMenu" role="button">
          <span />
        </div>
      )}
      <nav role="navigation" aria-label="Main navigation">
        <NavLink exact to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/demo" onClick={toggleMenu}>
          Demo
        </NavLink>
        <NavLink to="/show-speech" onClick={toggleMenu}>
          Show Speech
        </NavLink>
        <NavLink to="/new" onClick={toggleMenu}>
          New
        </NavLink>
      </nav>
    </header>
  );
};
