'use client';

import React from 'react';
import ScrollExpandMedia from '../../scroll-expansion-hero';
import Image from 'next/image';

const products = [
  {
    id: 'p1',
    title: 'Equity Funds',
    description: 'Diversified equity portfolios for long-term growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    id: 'p2',
    title: 'Debt Funds',
    description: 'Stable income with lower volatility.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
  },
  {
    id: 'p3',
    title: 'Mutual Plans',
    description: 'Curated plans to match different risk profiles.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  },
];

const Products: React.FC = () => {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
      bgImageSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
      title={'Our Products'}
      scrollToExpand={'Scroll to explore our products'}
      textBlend={false}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <article
            key={p.id}
            className="relative rounded-xl overflow-hidden bg-white/5 p-6 shadow-lg"
          >
            <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.description}</p>

            <button className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-white">
              Learn more
            </button>
          </article>
        ))}
      </div>
    </ScrollExpandMedia>
  );
};

export default Products;
