'use client';

import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { ScrollProgress } from '@/components/animations/ScrollProgress/ScrollProgress';
import { VideoHero } from '@/components/sections/VideoHero/VideoHero';
import { PixelTrail } from '@/components/ui/pixel-trail';
import { useScreenSize } from '@/components/hooks/use-screen-size';
import { Blog } from '@/components/sections/Blog/Blog';
import { TrendingUp, Zap, Shield } from 'lucide-react';

// Dynamic imports for below-fold heavy components
const Products = dynamic(() => import('@/components/sections/Products'), {
  loading: () => <div style={{ minHeight: '100vh' }} />,
});
const TestimonialsSection = dynamic(
  () => import('@/components/ui/testimonials-with-marquee').then(mod => ({ default: mod.TestimonialsSection })),
  { loading: () => <div style={{ minHeight: '400px' }} /> }
);

export default function HomePage() {
  const screenSize = useScreenSize();

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

  return (
    <>
      <ScrollProgress />
      {/* Video Hero Section */}
      <VideoHero />

      <div className="container">
        {/* Features Section */}
        <section className="section relative">
          <div className="absolute inset-0 z-0">
            <PixelTrail
              pixelSize={screenSize.lessThan(`md`) ? 40 : 60}
              fadeDuration={200}
              delay={800}
              pixelClassName="rounded-full bg-blue-400/40"
            />
          </div>
          <FadeIn>
            <h2
              className="text-center relative z-10"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem' }}
            >
              Why Choose Us
            </h2>
          </FadeIn>

          <div className="grid grid-responsive relative z-10">
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
      </div>

      {/* Products Section with Scroll Expansion - Full Width */}
      <Products />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Investors Say"
        description="Trusted by thousands of investors across India for seamless trading and investment solutions"
        testimonials={[
          {
            author: {
              name: "Rajesh Sharma",
              handle: "@rajesh_trades",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            text: "SBI Securities has made stock trading so simple. The research reports and real-time analytics have helped me make better investment decisions.",
          },
          {
            author: {
              name: "Priya Mehta",
              handle: "@priya_invests",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
            },
            text: "The IPO application process is seamless. I've successfully invested in multiple IPOs through their platform without any hassle.",
          },
          {
            author: {
              name: "Amit Patel",
              handle: "@amit_wealth",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            },
            text: "Best platform for mutual fund investments. The SIP calculator and portfolio tracking tools are incredibly useful for long-term planning.",
          },
          {
            author: {
              name: "Sneha Gupta",
              handle: "@sneha_fin",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
            },
            text: "As an NRI, managing my investments in India was always a challenge. SBI Securities NRI zone made it effortless with great customer support.",
          },
          {
            author: {
              name: "Vikram Singh",
              handle: "@vikram_equity",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
            },
            text: "The derivatives trading tools are top-notch. Real-time data, quick execution, and the margin trading facility gives me the edge I need.",
          },
        ]}
      />

      {/* Blog Section */}
      <Blog />
    </>
  );
}
