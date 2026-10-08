import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const handbooks = [
  {
    title: 'General Handbook',
    color: '#38bdf8',
    description: 'All-purpose info every staff member needs to know — code of conduct, roles, and communication.',
    link: '/general-handbook/',
  },
  {
    title: 'Server Staff Handbook',
    color: '#f59e0b',
    description: 'Guidelines and procedures for moderators and trial mods.',
    link: '/server-staff/',
  },
  {
    title: 'Moderation Handbook',
    color: '#a259f7',
    description: 'The full Little Haven moderation guide — rules, commands, procedures, and case handling.',
    link: '/moderation/',
  },
  {
    title: 'Event Staff Handbook',
    color: '#10b981',
    description: 'Everything for event hosts and event security.',
    link: '/event-staff/',
  },
  {
    title: 'Server IT Handbook',
    color: '#94a3b8',
    description: 'Bots, tools, permissions, and troubleshooting for the tech team.',
    link: '/it/',
  },
];

function HandbookCard({ title, description, link, color }) {
  return (
    <div className={styles.card} style={{ '--card-accent': color }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className={styles.cardLink} to={link}>
        Read more →
      </Link>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={styles.hero}>
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
      </header>
      <main className={styles.grid}>
        {handbooks.map((h) => (
          <HandbookCard key={h.title} {...h} />
        ))}
      </main>
    </Layout>
  );
}
