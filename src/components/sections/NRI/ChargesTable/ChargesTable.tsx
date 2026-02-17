'use client';

import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { NRI_CHARGES_COLUMNS, NRI_CHARGES_ROWS } from '@/data/nri';
import styles from './ChargesTable.module.scss';

export function ChargesTable() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>
            NRI Account opening Charges (In Rupees) &ndash; Effective May 1st,
            2024
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {NRI_CHARGES_COLUMNS.map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {NRI_CHARGES_ROWS.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? styles.evenRow : styles.oddRow}
                  >
                    <td>{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
