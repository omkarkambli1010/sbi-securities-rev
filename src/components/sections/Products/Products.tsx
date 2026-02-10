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
        mediaSrc="https://cdn.pixabay.com/photo/2021/02/08/11/21/man-5994202_1280.jpg"
        bgImageSrc="https://cdn.pixabay.com/photo/2021/02/08/11/21/man-5994202_1280.jpg"
        title="Stock Market"
        date="2026"
        scrollToExpand="Scroll to expand"
      />
    </>
  );
};

export default Products;
