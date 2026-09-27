'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import { APP_STORE_URL } from '@/components/AppStoreButton'

const included = [
  'No in-app purchases',
  'No subscription',
  'No ads',
  'No account to create',
  'No analytics or tracking',
  'As many trips, bags and items as you want',
]

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-black to-purple-900/20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            It&apos;s free
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            PacBag is one person&apos;s side project, not a business. There was never a
            plan to charge for it, so there is no free tier and nothing held back.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 text-left mb-12">
            {included.map((item, index) => (
              <motion.li
                key={item}
                className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download on the App Store
          </motion.a>

          <p className="text-sm text-gray-500 mt-4">
            Requires iOS 18.5 or later.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
