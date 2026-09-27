'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'
import AppStoreButton from '@/components/AppStoreButton'

const Hero: React.FC = () => {
  const phoneTiltRef = useTilt({
    max: 10,
    perspective: 1500,
    scale: 1.02,
    speed: 500,
    glare: true,
    'max-glare': 0.1,
  })

  const scrollToDemo = () => {
    document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Know what&apos;s
            <br />
            in every bag
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            List the bags you&apos;re taking, put items in them, and check them off as you pack.
            PacBag weighs each bag against the limit you set, so you find out you&apos;re
            over at home instead of at the airport.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <AppStoreButton />

            <motion.button
              onClick={scrollToDemo}
              className="group border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>See how it works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.p
            className="text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Free. No account, no ads, no subscription.
          </motion.p>
        </div>

        {/* Phone Mockup */}
        <motion.div
          className="relative max-w-sm mx-auto mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          ref={phoneTiltRef}
        >
          <div className="relative">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-black rounded-[2.5rem] overflow-hidden">
                <div className="aspect-[9/19.5] relative">
                  <Image
                    src="/app-screenshot-hero.png"
                    alt="A trip in PacBag, showing its bags and how full each one is"
                    width={375}
                    height={812}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              aria-hidden="true"
            >
              ✓
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg"
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              aria-hidden="true"
            >
              🎒
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
