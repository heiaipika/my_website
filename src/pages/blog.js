import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Blog() {
  useEffect(() => {
    // 确保移除首页样式
    document.documentElement.classList.remove('homepage-active');
  }, []);

  return (
    <Layout>
      {/* 页面内容 */}
    </Layout>
  );
} 