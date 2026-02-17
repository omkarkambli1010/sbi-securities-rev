'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { NRI_FAQS } from '@/data/nri';
import { cn } from '@/lib/utils';
import styles from './FAQs.module.scss';

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>FAQs</h2>
        </FadeIn>
        <div className={styles.accordion}>
          {NRI_FAQS.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className={styles.item}>
                <button
                  className={styles.trigger}
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      styles.chevron,
                      openIndex === index && styles.chevronOpen
                    )}
                  />
                </button>
                <div
                  className={cn(
                    styles.content,
                    openIndex === index && styles.contentOpen
                  )}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
