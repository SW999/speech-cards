import React, { FunctionComponent, useEffect, useCallback, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobileDevice } from 'utils/';

const Header: FunctionComponent = memo(() => {
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
});

export default Header;
