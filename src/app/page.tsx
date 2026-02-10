'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { MagneticButton } from '@/components/animations/MagneticButton/MagneticButton';
import { ScrollProgress } from '@/components/animations/ScrollProgress/ScrollProgress';
import { VideoHero } from '@/components/sections/VideoHero/VideoHero';
import { animateCounter } from '@/lib/gsap';
import { Blog } from '@/components/sections/Blog/Blog';
import { TrendingUp, Zap, Shield, BarChart3, Users, Award } from 'lucide-react';

export default function HomePage() {
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    statsRefs.current.forEach((ref, index) => {
      if (ref) {
        const value = ref.getAttribute('data-value');
        if (value) {
          animateCounter(ref, parseInt(value), { delay: index * 0.1 });
        }
      }
    });
  }, []);

  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Built with Next.js 15 and optimized for peak performance.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'GSAP Animations',
      description: 'Smooth, professional animations powered by GSAP library.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Dark Mode',
      description: 'Beautiful dark and light themes with seamless transitions.',
    },
  ];

  const products = [
    {
      icon: <BarChart3 size={40} />,
      title: 'Trading Platform',
      description: 'Advanced trading tools with real-time market data and analytics.',
      features: ['Live Market Data', 'Advanced Charts', 'Order Management'],
    },
    {
      icon: <Users size={40} />,
      title: 'Portfolio Management',
      description: 'Track and manage your investments with powerful portfolio tools.',
      features: ['Asset Allocation', 'Performance Tracking', 'Risk Analysis'],
    },
    {
      icon: <Award size={40} />,
      title: 'Premium Research',
      description: 'Access expert market research and investment recommendations.',
      features: ['Market Insights', 'Stock Reports', 'Expert Analysis'],
    },
  ];

  const stats = [
    { value: 10000, label: 'Active Users', suffix: '+' },
    { value: 500, label: 'Companies Listed', suffix: '+' },
    { value: 99, label: 'Uptime', suffix: '%' },
    { value: 24, label: 'Support', suffix: '/7' },
  ];

  return (
    <>
      <ScrollProgress />
      {/* Video Hero Section */}
      <VideoHero />

      <div className="container">
        {/* Stats Section */}
        {/* <section className="section-sm">
          <div className="grid grid-responsive" style={{ textAlign: 'center' }}>
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div>
                  <div
                    ref={(el) => {
                      if (el) statsRefs.current[index] = el;
                    }}
                    data-value={stat.value}
                    className="text-gradient"
                    style={{
                      fontSize: 'clamp(2rem, 5vw, 3rem)',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                    }}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section> */}

        {/* Features Section */}
        <section className="section">
          <FadeIn>
            <h2
              className="text-center"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem' }}
            >
              Why Choose Us
            </h2>
          </FadeIn>

          <div className="grid grid-responsive">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <Card variant="elevated" padding="lg">
                  <div style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                    {feature.icon}
                  </div>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="section">
          <FadeIn>
            <h2
              className="text-center"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}
            >
              Our Products
            </h2>
            <p
              className="text-center text-muted"
              style={{ maxWidth: '600px', margin: '0 auto 3rem' }}
            >
              Comprehensive suite of investment tools designed for modern traders
            </p>
          </FadeIn>

          <div className="grid grid-responsive">
            {products.map((product, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <Card variant="glass" padding="lg">
                  <div style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                    {product.icon}
                  </div>
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <div style={{ marginTop: '1.5rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          style={{
                            padding: '0.5rem 0',
                            borderBottom: i < product.features.length - 1 ? '1px solid var(--color-border)' : 'none',
                            fontSize: '0.875rem',
                            color: 'var(--color-muted)',
                          }}
                        >
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>

      {/* Blog Section */}
      <Blog />

      {/* CTA Section */}
      <div className="container section" style={{ textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            Ready to Get Started?
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join thousands of investors who trust our platform for their trading needs
          </p>
          <div className="flex gap-md" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton strength={0.3}>
              Create Free Account
            </MagneticButton>
            <Button variant="ghost" size="lg">
              Contact Sales
            </Button>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
