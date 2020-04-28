import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { checkTouch } from '../../utils/';

export const Header: FunctionComponent = () => {
  const isTouch = checkTouch();
  const toggleMenu = () => {
    if (isTouch) {
      document.getElementById('pageHeader').classList.toggle('show-menu');
    }
  };

  useEffect(() => {
    if (isTouch) {
      const menuBtn = document.getElementById('toggleMenu');
      menuBtn.addEventListener('click', toggleMenu);

      return () => menuBtn.removeEventListener('click', toggleMenu);
    }
  }, []);

  return (
    <header className="page-header">
      <div className="menu-toggle" id="toggleMenu">
        <span />
      </div>
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
