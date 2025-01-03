import React from 'react';
import Layout from '@theme-original/Layout';
import Starfield from '@site/src/components/Starfield';
import DocBackground from '@site/src/components/DocBackground';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/docs');

  return (
    <>
      {isDocsPage ? <DocBackground /> : <Starfield />}
      <Layout {...props} />
    </>
  );
} 