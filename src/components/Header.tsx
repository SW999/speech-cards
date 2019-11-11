import * as React from 'react';
import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FunctionComponent = () => (
  <header>
    <nav>
      <NavLink exact={true} to="/">Home</NavLink>
      <NavLink to="/demo">Demo</NavLink>
      <NavLink to="/from-storage">From Storage</NavLink>
      <NavLink to="/from-json">From JSON</NavLink>
      <NavLink to="/new">New</NavLink>
    </nav>
  </header>
);
