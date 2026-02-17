'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import styles from './TrustedGateway.module.scss';

export function TrustedGateway() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>
            Your Trusted Gateway to Invest in Indian Markets
          </h2>
          <p className={styles.description}>
            SBI Securities NRI 3-in-1 account enables NRI investors abroad and
            within India to stay invested in the Indian markets. Now invest in
            India&apos;s equity stocks, IPOs, bonds, ETFs and NRO Mutual Funds
            from any part of the world.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className={styles.videoWrapper}>
            <Image
              src="/images/nri/video-thumbnail.png"
              alt="NRI 3-in-1 Account - PIS + Demat + Trading A/c"
              width={700}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
            <button className={styles.playButton} aria-label="Play video">
              <Play size={28} fill="white" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
