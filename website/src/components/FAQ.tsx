'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus } from 'lucide-react'
import type { FAQ as FAQType } from '@/types'

const faqs: FAQType[] = [
  {
    id: 1,
    question: 'Does it suggest what to pack?',
    answer:
      'No. PacBag does not look up the weather, read your destination, or guess what you need. It comes with eight ready-made lists you can start from and edit, and you can save your own. Everything else you type in.',
  },
  {
    id: 2,
    question: 'Does it work offline?',
    answer:
      'Yes. Your lists are stored on the device, so the app works with no signal at all. Changes sync to your other devices the next time you are online.',
  },
  {
    id: 3,
    question: 'Where does my data go?',
    answer:
      'Into your own iCloud account, and nowhere else. There is no PacBag server, no account to create and no analytics. Nobody but you can read your lists, including the developer.',
  },
  {
    id: 4,
    question: 'How does syncing work?',
    answer:
      'Through CloudKit, using the Apple ID you are already signed in to. Any device on the same Apple ID picks up your trips. Sync is not instant — give it a moment after a change.',
  },
  {
    id: 5,
    question: 'Can I share a list with someone?',
    answer:
      'You can export a trip or a single bag as plain text, Markdown or rich text, then send it however you like. It is a copy, not a shared document — the other person cannot edit yours, and there is no collaborative list.',
  },
  {
    id: 6,
    question: 'Can I track how much a bag weighs?',
    answer:
      'Yes, that is the main reason the app exists. Give each bag a limit, put a weight on each item, and the bag total updates as you pack. Sub-bags count towards the bag holding them.',
  },
  {
    id: 7,
    question: 'What do I need to run it?',
    answer:
      'An iPhone or iPad on iOS 18.5 or later. There is no Mac, Apple Watch or Android version.',
  },
  {
    id: 8,
    question: 'What does it cost?',
    answer:
      'Nothing. No purchases, no subscription, no ads.',
  },
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
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Questions
          </h2>
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
                  aria-expanded={openFAQ === faq.id}
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
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-gray-400">
            Something else?{' '}
            <a href="/support" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">
              Get in touch
            </a>
            . PacBag is made by one person, so the reply comes from him.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
