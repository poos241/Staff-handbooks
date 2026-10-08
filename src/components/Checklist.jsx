import React, { useState, useEffect } from 'react';
import styles from './Checklist.module.css';

/**
 * Interactive checklist with a live progress counter, persisted in localStorage.
 *
 * Props:
 * - id: unique string key for this checklist (used for storage)
 * - items: array of strings or JSX nodes, one per checkbox
 */
export default function Checklist({ id, items }) {
  const storageKey = `lh-checklist-${id}`;
  const [checked, setChecked] = useState(() => items.map(() => false));
  const [loaded, setLoaded] = useState(false);

  // Load saved state on mount (client-side only; SSR-safe)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length === items.length) {
          setChecked(parsed.map(Boolean));
        }
      }
    } catch {
      /* ignore corrupted storage */
    }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist on change
  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      /* storage unavailable */
    }
  }, [checked, loaded, storageKey]);

  const done = checked.filter(Boolean).length;
  const total = items.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  const toggle = (i) =>
    setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)));
  const reset = () => setChecked(items.map(() => false));

  return (
    <div className={styles.checklist}>
      <div className={styles.header}>
        <span className={styles.counter} aria-live="polite">
          {done}/{total} completed
        </span>
        <div className={styles.bar} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>
        <button type="button" className={styles.reset} onClick={reset}>
          Reset
        </button>
      </div>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={checked[i] ? styles.isDone : ''}>
            <label>
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
              />
              <span className={styles.label}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
