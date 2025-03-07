import React from 'react';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import { useDocsSidebar } from '@docusaurus/theme-common';

export default function CustomPage() {
  const sidebar = useDocsSidebar();

  return (
    <Layout>
      <div style={{ display: 'flex', color: 'black' }}>
        {/* Sidebar Navigation */}
        <div style={{ width: '250px', padding: '10px' }}>
          <DocSidebar sidebar={sidebar} path="/docs/intro" />
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '20px' }}>
          <h1>Custom Documentation Page</h1>
          <p>This page includes the documentation sidebar.</p>
        </div>
      </div>
    </Layout>
  );
}
