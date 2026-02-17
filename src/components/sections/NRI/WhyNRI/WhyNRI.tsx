'use client';

import React from 'react';
import {
  ShieldCheck,
  FileCheck,
  Layers,
  Headphones,
  ClipboardCheck,
  ArrowUpRight,
  TrendingUp,
  BadgePercent,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { NRI_FEATURES } from '@/data/nri';
import styles from './WhyNRI.module.scss';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={24} />,
  FileCheck: <FileCheck size={24} />,
  Layers: <Layers size={24} />,
  Headphones: <Headphones size={24} />,
  ClipboardCheck: <ClipboardCheck size={24} />,
  ArrowUpRight: <ArrowUpRight size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  BadgePercent: <BadgePercent size={24} />,
};

export function WhyNRI() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>
            Why open an NRI Demat and Trading Account with SBI Securities
          </h2>
        </FadeIn>
        <div className={styles.grid}>
          {NRI_FEATURES.map((feature, index) => (
            <FadeIn key={feature.id} delay={index * 0.1}>
              <div className={styles.featureCard}>
                <div className={styles.iconWrapper}>
                  {iconMap[feature.icon]}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
