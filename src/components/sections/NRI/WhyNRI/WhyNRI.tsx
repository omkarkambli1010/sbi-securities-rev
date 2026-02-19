'use client';

import React from 'react';
import {
  Shield,
  FileText,
  Layers,
  MessageSquare,
  CircleCheck,
  TrendingUp,
  Zap,
  IndianRupee,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { NRI_FEATURES } from '@/data/nri';
import styles from './WhyNRI.module.scss';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={40} strokeWidth={1.75} />,
  FileText: <FileText size={40} strokeWidth={1.75} />,
  Layers: <Layers size={40} strokeWidth={1.75} />,
  MessageSquare: <MessageSquare size={40} strokeWidth={1.75} />,
  CircleCheck: <CircleCheck size={40} strokeWidth={1.75} />,
  TrendingUp: <TrendingUp size={40} strokeWidth={1.75} />,
  Zap: <Zap size={40} strokeWidth={1.75} />,
  IndianRupee: <IndianRupee size={40} strokeWidth={1.75} />,
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
            <FadeIn key={feature.id} delay={index * 0.08}>
              <div className={styles.featureCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                </div>
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
