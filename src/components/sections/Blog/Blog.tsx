'use client';

import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { PixelTrail } from '@/components/ui/pixel-trail';
import { useScreenSize } from '@/components/hooks/use-screen-size';
import styles from './Blog.module.scss';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    initials: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    title: 'Understanding Market Volatility: A Guide for New Investors',
    excerpt:
      'Learn how market volatility works, what causes price fluctuations, and how to make informed decisions during uncertain times.',
    category: 'Investing',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    author: { name: 'Rahul Sharma', initials: 'RS' },
  },
  {
    title: 'Top 5 Technical Indicators Every Trader Should Know',
    excerpt:
      'Discover the essential technical indicators that can help you identify trends, momentum, and potential entry and exit points.',
    category: 'Trading',
    date: 'Jan 10, 2026',
    readTime: '7 min read',
    author: { name: 'Priya Patel', initials: 'PP' },
  },
  {
    title: 'Building a Diversified Portfolio in 2026',
    excerpt:
      'Explore strategies for building a well-balanced portfolio that can weather market storms and deliver consistent returns.',
    category: 'Strategy',
    date: 'Jan 5, 2026',
    readTime: '6 min read',
    author: { name: 'Amit Kumar', initials: 'AK' },
  },
];

export function Blog() {
  const screenSize = useScreenSize();

  return (
    <section className={styles.section}>
      <div className={styles.container} style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <PixelTrail
            pixelSize={screenSize.lessThan(`md`) ? 36 : 56}
            fadeDuration={220}
            delay={700}
            pixelClassName="rounded-full bg-yellow-400/30"
          />
        </div>
        <div style={{ position: 'relative', zIndex: 10 }}>
        <FadeIn>
          <div className={styles.header}>
            <span className={styles.badge}>From Our Blog</span>
            <h2 className={styles.title}>Latest Insights</h2>
            <p className={styles.subtitle}>
              Stay informed with expert analysis, market trends, and investment strategies
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <article className={styles.card}>
                <div className={styles.image}>
                  <div className={styles.imagePlaceholder}>
                    <BookOpen size={48} />
                  </div>
                  <span className={styles.category}>{post.category}</span>
                </div>

                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className={styles.metaItem}>
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>

                  <div className={styles.footer}>
                    <div className={styles.author}>
                      <div className={styles.avatar}>{post.author.initials}</div>
                      <span className={styles.authorName}>{post.author.name}</span>
                    </div>
                    <button className={styles.readMore} type="button">
                      Read <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
