'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Package, Scale, ListChecks, Tag, Bell, Cloud } from 'lucide-react'
import type { Feature } from '@/types'

// Every entry here has to be something the app actually does today.
const features: Feature[] = [
  {
    icon: Package,
    title: 'Bags inside bags',
    description:
      'A packing cube in your suitcase gets its own list. The suitcase still counts everything inside it.',
  },
  {
    icon: Scale,
    title: 'Weight per bag',
    description:
      'Give a bag a limit. Add weights to items as you go and watch how much of it you have left.',
  },
  {
    icon: ListChecks,
    title: 'Lists to start from',
    description:
      'Eight built in, from a business week to a camping trip. Save your own once you have packed it your way.',
  },
  {
    icon: Tag,
    title: 'Categories you control',
    description:
      'Clothes, electronics, toiletries and whatever else you need. Rename them, add subcategories, pick your own icons.',
  },
  {
    icon: Bell,
    title: 'A reminder before you go',
    description:
      'Set one against the trip date. It is a normal iOS notification, scheduled on your phone.',
  },
  {
    icon: Cloud,
    title: 'Your iCloud, no account',
    description:
      'Trips sync between your iPhone and iPad through your own Apple ID. There is nothing to sign up for.',
    highlight: true,
  },
]

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-32 bg-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What it does
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No server, no sign-up, and nothing guessing what you should bring. Just a
            careful list of what you are taking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                feature.highlight
                  ? 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 hover:border-purple-400/50'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {feature.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              )}

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                  feature.highlight
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-white/10'
                }`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
