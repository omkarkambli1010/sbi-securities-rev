'use client';

import React from 'react';
import ScrollExpandMedia from '../../scroll-expansion-hero';

const Products: React.FC = () => {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1642614532173-0aca6d4ce560"
      bgImageSrc="https://images.unsplash.com/photo-1642614532173-0aca6d4ce560"
      title="Stock Market"
      date="2026"
      scrollToExpand="Scroll to expand"
    />
  );
};

export default Products;
