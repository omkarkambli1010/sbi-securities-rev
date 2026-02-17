'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import styles from './QuickGuide.module.scss';

export function QuickGuide() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>
            Here&apos;s a Quick Guide to Opening Your NRI/NRO Account Digitally
          </h2>
          <p className={styles.description}>
            SBI Securities NRI 3-in-1 account enables NRI investors abroad and
            within India to stay invested in the Indian markets. Now invest in
            India&apos;s equity stocks, IPOs, bonds, and other products from any
            part of the world.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className={styles.videoWrapper}>
            <Image
              src="/images/nri/video-thumbnail.png"
              alt="Quick guide to opening NRI account digitally"
              width={700}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
            <button className={styles.playButton} aria-label="Play video guide">
              <Play size={28} fill="white" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
