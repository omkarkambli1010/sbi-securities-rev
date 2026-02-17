'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { NRI_ELIGIBILITY, NRI_PROCESS_STEPS } from '@/data/nri';
import styles from './AccountProcess.module.scss';

export function AccountProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>
            How to start with Account Opening process.
          </h2>
        </FadeIn>
        <div className={styles.columns}>
          <FadeIn direction="left" delay={0.1}>
            <div className={styles.card}>
              <h3 className={styles.cardHeading}>Eligibility</h3>
              <ul className={styles.checklist}>
                {NRI_ELIGIBILITY.map((item, i) => (
                  <li key={i} className={styles.checkItem}>
                    <CheckCircle size={20} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className={styles.card}>
              <h3 className={styles.cardHeading}>
                How to initiate the process
              </h3>
              <ol className={styles.stepsList}>
                {NRI_PROCESS_STEPS.map((step) => (
                  <li key={step.step} className={styles.stepItem}>
                    <span className={styles.stepNumber}>{step.step}</span>
                    <p className={styles.stepText}>
                      <strong>{step.title}:</strong> {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
