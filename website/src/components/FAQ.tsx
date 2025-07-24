'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import type { FAQ as FAQType } from '@/types'

const faqs: FAQType[] = [
  {
    id: 1,
    question: 'Can I use PacBag offline?',
    answer: 'Yes! PacBag works completely offline once downloaded. Your packing lists are stored locally on your device. When you\'re back online, any changes sync automatically across your devices using iCloud.'
  },
  {
    id: 2,
    question: 'Is my data secure and private?',
    answer: 'Absolutely. Your data is stored locally on your device and synced through Apple\'s secure iCloud infrastructure. We never access your personal packing information. Your privacy is our priority.'
  },
  {
    id: 3,
    question: 'Can I customize the packing templates?',
    answer: 'Yes! You can create custom packing lists and organize items by categories. Add your own items, set quantities, and save lists for future trips.'
  },
  {
    id: 4,
    question: 'What platforms does PacBag support?',
    answer: 'PacBag is currently available for iOS (iPhone and iPad) with deep integration into the Apple ecosystem.'
  },
  {
    id: 5,
    question: 'Can I share my packing lists?',
    answer: 'Yes! You can share your packing lists with others. Perfect for sharing with travel companions or keeping backup copies.'
  },
  {
    id: 6,
    question: 'What\'s included in the free version?',
    answer: 'PacBag is completely free to use with unlimited trips and items. Create as many packing lists as you need without any restrictions.'
  },
  {
    id: 7,
    question: 'How does syncing work across devices?',
    answer: 'PacBag uses iCloud to sync your data across all your Apple devices. Your packing lists are automatically updated on all devices signed in with the same Apple ID.'
  },
  {
    id: 8,
    question: 'Can I track the weight of my luggage?',
    answer: 'Yes! You can add weight information to your bags and items to track total luggage weight and avoid airline fees.'
  }
]

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section id="faq" className="py-32 bg-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 35%, white 35%, white 37%, transparent 37%), linear-gradient(-45deg, transparent 35%, white 35%, white 37%, transparent 37%)`,
          backgroundSize: '20px 20px'
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
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">FAQ</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Questions?
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              We&apos;ve got answers
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about PacBag and how it can transform your travel packing experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openFAQ === faq.id ? (
                      <Minus className="w-6 h-6 text-purple-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-4 border border-purple-500/20">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you get the most out of PacBag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/support"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.a>
              <motion.a
                href="/privacy-policy"
                className="inline-block border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Privacy Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ