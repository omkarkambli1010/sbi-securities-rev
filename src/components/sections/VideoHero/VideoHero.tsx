'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function VideoHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden -mt-[64px]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.ctfassets.net/ilblxxee70tt/35vuwJ0dO3MG6EHkQzdJy7/2a55d282cf8be6c8cdd681d90a4b52de/Rh25_OptionsHero_Web_1100x1800_v011_1.webm"
          type="video/webm"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <h1
            className="text-white font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Invest Smarter.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Grow Faster.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            India&apos;s trusted investment platform. Trade in Equities, IPOs,
            Mutual Funds, Derivatives & more with cutting-edge tools and
            real-time analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://ekyc.sbisecurities.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-base font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Open Demat Account
            </a>
            <Link
              href="/products"
              className="px-8 py-3.5 text-base font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200 hover:border-white/50"
            >
              Explore Products
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-white/80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
