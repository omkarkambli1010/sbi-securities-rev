'use client';

import React from 'react';
import ScrollExpandMedia from '../../scroll-expansion-hero';

const Products: React.FC = () => {
  return (
    <>
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
          Our Products
        </h2>
        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
          Explore our comprehensive investment solutions with interactive experience
        </p>
      </div>
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://pixabay.com/get/g1816ab37c3d210b0a99bde4d9bc7c30d0c9a0e27a2d0d1e43dc5ef53c1f9f0f3_1280.jpg"
        bgImageSrc="https://pixabay.com/get/g1816ab37c3d210b0a99bde4d9bc7c30d0c9a0e27a2d0d1e43dc5ef53c1f9f0f3_1280.jpg"
        title="Stock Market"
        date="2026"
        scrollToExpand="Scroll to expand"
      />
    </>
  );
};

export default Products;
