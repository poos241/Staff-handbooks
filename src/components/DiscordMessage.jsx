import React from 'react';
import styles from './DiscordMessage.module.css';

/**
 * Renders a message that looks like a Discord chat message.
 * Use for example announcements, ticket messages, and mod responses.
 *
 * Props:
 * - user: display name
 * - color: username color (role color), defaults to Discord blurple-ish mod purple
 * - tag: small badge next to the name, e.g. "MOD" or "BOT"
 * - time: timestamp string, e.g. "Today at 4:20 PM"
 * - avatarText: 1-2 letters shown in the avatar circle
 */
export default function DiscordMessage({
  user = 'Moderator',
  color = '#a259f7',
  tag = 'MOD',
  time = 'Today at 2:15 PM',
  avatarText,
  children,
}) {
  const initials = avatarText || user.slice(0, 2).toUpperCase();
  return (
    <div className={styles.message}>
      <div className={styles.avatar} style={{ backgroundColor: color }}>
        {initials}
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.username} style={{ color }}>
            {user}
          </span>
          {tag && <span className={styles.tag}>{tag}</span>}
          <span className={styles.time}>{time}</span>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
