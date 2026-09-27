'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const APP_STORE_URL =
  'https://apps.apple.com/br/app/pacbag-digital-luggage/id6749021887'

// Placeholder for Apple's official "Download on the App Store" badge. The artwork
// has to come from Apple's marketing guidelines page and be dropped into
// public/ before this can be swapped for an <Image>. Until then this is a plain
// link, which is at least honest about where it goes.
const AppStoreButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-white transition-colors hover:bg-white/10 ${className}`}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
  >
    <span className="text-left leading-tight">
      <span className="block text-[11px] uppercase tracking-wide text-gray-400">
        Download on the
      </span>
      <span className="block text-lg font-semibold">App Store</span>
    </span>
  </motion.a>
)

export default AppStoreButton
