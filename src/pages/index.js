import React, { useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.container}>
        <img src="/img/profile.jpg" alt="Profile" className={styles.profileImage} />
        <h1 className={styles.introText}>Hi, I'm Gan</h1>
        <div className={styles.navContainer}>
          <div className={styles.links}>
            <a href="/" className={styles.linkIcon} title="Home">
              <img src="/img/home.png" alt="Home" className={styles.icon} />
            </a>
            <a href="/blog" className={styles.linkIcon} title="Blog">
              <img src="/img/blog.png" alt="Blog" className={styles.icon} />
            </a>
            <a href="https://github.com/heiaipika" className={styles.linkIcon} target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src="/img/github.png" alt="GitHub" className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  useEffect(() => {
    //添加背景元素
    const background = document.createElement('div');
    background.className = 'homepage-background';
    document.body.appendChild(background);
    
    // 添加包装器类
    document.body.classList.add('homepage-wrapper');
    
    return () => {
      // 清理
      document.body.removeChild(background);
      document.body.classList.remove('homepage-wrapper');
    };
  }, []);

  return (
    <Layout>
      <HomepageHeader />
    </Layout>
  );
}