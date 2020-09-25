import React, { useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobileDevice } from '../../utils';

export default function Header() {
  const isMobile = isMobileDevice();
  const toggleMenu = useCallback(() => {
    if (isMobile) {
      const $menu = document.getElementById('toggleMenu');
      document.getElementById('pageHeader').classList.toggle('show-menu');
      $menu.setAttribute(
        'aria-pressed',
        $menu.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'
      );
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
    <header className="page-header" id="pageHeader" role="banner">
      {isMobile && (
        <div
          aria-label="Toggle menu"
          aria-pressed="false"
          className="menu-toggle"
          id="toggleMenu"
          role="button"
        >
          <span />
        </div>
      )}
      <nav role="navigation" aria-label="Main navigation" onClick={toggleMenu}>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/demo">Demo</NavLink>
        <NavLink to="/my-speeches">Speeches</NavLink>
        <NavLink to="/new">New</NavLink>
        <NavLink to="/theme">Theme</NavLink>
      </nav>
    </header>
  );
}
