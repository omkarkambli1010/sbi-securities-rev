'use client';

import React from 'react';
import ScrollExpandMedia from '../../scroll-expansion-hero';
import { PixelTrail } from '@/components/ui/pixel-trail';
import { useScreenSize } from '@/components/hooks/use-screen-size';

const Products: React.FC = () => {
  const screenSize = useScreenSize();

  return (
    <>
      <div className="container section relative">
        <div className="absolute inset-0 z-0">
          <PixelTrail
            pixelSize={screenSize.lessThan(`md`) ? 45 : 70}
            fadeDuration={250}
            delay={900}
            pixelClassName="rounded-full bg-purple-400/40"
          />
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          Our Products
        </h2>
        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 3rem', position: 'relative', zIndex: 10 }}>
          Explore our comprehensive investment solutions with interactive experience
        </p>
      </div>
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://cdn.pixabay.com/photo/2016/12/13/22/15/chart-1905225_1280.jpg"
        bgImageSrc="https://cdn.pixabay.com/photo/2021/08/06/00/37/stock-trading-6525081_1280.jpg"
        title="Stock Market"
        date="2026"
        scrollToExpand="Scroll to expand"
      />
    </>
  );
};

export default Products;
