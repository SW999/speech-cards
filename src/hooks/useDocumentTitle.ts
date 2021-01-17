import { useEffect } from 'react';
import { DEFAULT_TITLE } from '~constants';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${DEFAULT_TITLE} - ${title}`;

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}
