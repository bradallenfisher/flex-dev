import { useEffect } from 'react';

export const appendSearchScript = () => {
  useEffect(() => {
    const searchScript = document.createElement('script');
    //needs to be async to use as_sitesearch attribute in order to restrict results to pages from a specific site.

    searchScript.async = true;
    searchScript.setAttribute(
      'src',
      'https://cse.google.com/cse.js?cx=008764984120410162534:1e5_y56j5ry'
    );
    document.head.appendChild(searchScript);
  }, []);
};
