'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './ScrollProgress.module.scss';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressFill}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
