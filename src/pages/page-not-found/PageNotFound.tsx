import React from 'react';
import { useDocumentTitle } from '../../hooks';

export default function PageNotFound() {
  useDocumentTitle('404');

  return (
    <div className="no-match-wrapper">
      <h1>404</h1>
      <h2>Ups, not found!</h2>
    </div>
  );
}
