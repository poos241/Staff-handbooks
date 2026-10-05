import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const handbooks = [
  {
    title: 'General Handbook',
    description: 'All-purpose info every staff member needs to know — code of conduct, roles, and communication.',
    link: '/general-handbook/',
  },
  {
    title: 'Server Staff Handbook',
    description: 'Guidelines and procedures for moderators and trial mods.',
    link: '/server-staff/',
  },
  {
    title: 'Event Staff Handbook',
    description: 'Everything for event hosts and event security.',
    link: '/event-staff/',
  },
  {
    title: 'Server IT Handbook',
    description: 'Bots, tools, permissions, and troubleshooting for the tech team.',
    link: '/it/',
  },
];

function HandbookCard({ title, description, link }) {
  return (
    <div className={styles.card}>
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
