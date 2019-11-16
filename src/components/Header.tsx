import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FunctionComponent = () => {
  useEffect(() => {
    const menuBtn = document.getElementById('toggleMenu');
    const toggleMenu = () => {
      const menuParent = menuBtn.parentElement;
      menuParent.classList.toggle('show-menu');

      if (menuParent.classList.contains('show-menu')) {
        setTimeout(() => menuParent.classList.toggle('show-menu'), 7000);
      }
    };

    menuBtn.addEventListener('click', toggleMenu);

    return () => menuBtn.removeEventListener('click', toggleMenu);
  }, []);

  return (
    <header className="page-header">
      <div className="menu-toggle" id="toggleMenu">
        <span />
      </div>
      <nav role="navigation" aria-label="Main navigation">
        <NavLink exact={true} to="/">
          Home
        </NavLink>
        <NavLink to="/demo">Demo</NavLink>
        <NavLink to="/from-storage">From Storage</NavLink>
        <NavLink to="/from-json">From JSON</NavLink>
        <NavLink to="/new">New</NavLink>
      </nav>
    </header>
  );
};
