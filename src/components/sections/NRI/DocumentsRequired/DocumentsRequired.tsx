'use client';

import React from 'react';
import { CheckSquare } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { NRI_DOCUMENTS } from '@/data/nri';
import styles from './DocumentsRequired.module.scss';

export function DocumentsRequired() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>
            Documents Required to Apply for NRI Account Opening
          </h2>
        </FadeIn>
        <div className={styles.grid}>
          {NRI_DOCUMENTS.map((doc, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className={styles.docItem}>
                <CheckSquare size={20} className={styles.docIcon} />
                <p className={styles.docText}>{doc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton}>Open Your Account Now</button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
