import React from 'react';
import Layout from '@theme/Layout';

export default function Tags() {
  return (
    <Layout title="Tags" description="Search and explore tags">
      <div className="container">
        <h1>Tags</h1>
        <input type="text" placeholder="Search tags..." />
        {/* 这里可以添加标签列表 */}
      </div>
    </Layout>
  );
} 