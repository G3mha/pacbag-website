'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Demo } from '@/types'
import { APP_STORE_URL } from '@/components/AppStoreButton'

const demos: Demo[] = [
  {
    id: 1,
    title: 'Start a trip',
    description: 'Give it a name, a destination and the dates you are away. Then add the bags you are taking.',
  },
  {
    id: 2,
    title: 'Pick a list to start from',
    description: 'Eight lists come with the app. Each one drops in a set of items with sensible quantities, and you edit from there.',
  },
  {
    id: 3,
    title: 'Pack and check off',
    description: 'Tick items as they go in. Each one carries a weight and a quantity, so the bag total moves as you pack.',
  },
  {
    id: 4,
    title: 'Send it to someone',
    description: 'Export a trip or a single bag as plain text, Markdown or rich text. Everything syncs to your iPad through iCloud.',
  },
]

const ProductDemo: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (!isPlaying || !inView) return

    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying, inView])

  const nextDemo = () => setCurrentDemo((prev) => (prev + 1) % demos.length)
  const prevDemo = () => setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length)

  return (
    <section id="demo" className="py-32 bg-gradient-to-b from-black to-purple-900/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How it works
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four steps, from an empty trip to a packed bag.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <motion.div
              className="relative w-full max-w-sm mx-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-black rounded-[2.5rem] overflow-hidden">
                    <div className="aspect-[9/19.5] bg-gradient-to-b from-purple-900/30 to-black relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentDemo}
                          className="absolute inset-0 p-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Status Bar */}
                          <div className="flex justify-between items-center text-white text-sm mb-8">
                            <span>9:41</span>
                            <div className="flex space-x-1">
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                              <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
                            </div>
                          </div>

                          <div className="text-white h-full flex flex-col">
                            {currentDemo === 0 && (
                              <div className="space-y-6">
                                <h3 className="text-2xl font-bold">New Trip</h3>
                                <div className="space-y-4">
                                  <div className="bg-white/10 rounded-xl p-4">
                                    <span className="text-sm text-gray-300">Name</span>
                                    <div className="text-lg font-medium">Tokyo, March</div>
                                  </div>
                                  <div className="bg-white/10 rounded-xl p-4">
                                    <span className="text-sm text-gray-300">Destination</span>
                                    <div className="text-lg font-medium">Tokyo, Japan</div>
                                  </div>
                                  <div className="bg-white/10 rounded-xl p-4">
                                    <span className="text-sm text-gray-300">Dates</span>
                                    <div className="text-lg font-medium">14 – 19 March</div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {currentDemo === 1 && (
                              <div className="space-y-6">
                                <h3 className="text-xl font-bold">Templates</h3>
                                <div className="space-y-3">
                                  {[
                                    { name: 'Business Week', sub: '5–7 days, meetings' },
                                    { name: 'Beach Vacation', sub: 'Sun and swimming' },
                                    { name: 'City Break', sub: 'A long weekend' },
                                    { name: 'Camping Adventure', sub: 'Tent and trail' },
                                  ].map((t, i) => (
                                    <motion.div
                                      key={t.name}
                                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 border border-purple-400/30"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                    >
                                      <div className="text-sm font-medium">{t.name}</div>
                                      <div className="text-xs text-gray-400">{t.sub}</div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {currentDemo === 2 && (
                              <div className="space-y-4">
                                <div>
                                  <h3 className="text-xl font-bold">Carry-on</h3>
                                  <p className="text-sm text-gray-400">6.4 of 8.0 kg</p>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: '80%' }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                  />
                                </div>
                                <div className="space-y-3 pt-2">
                                  {[
                                    { name: 'Dress shirts', meta: '×2 · 0.6 kg' },
                                    { name: 'Laptop', meta: '×1 · 2.0 kg' },
                                    { name: 'Chargers', meta: '×1 · 0.5 kg' },
                                    { name: 'Toiletries kit', meta: '×1 · 0.8 kg' },
                                  ].map((item, i) => (
                                    <motion.div
                                      key={item.name}
                                      className="flex items-center space-x-3 bg-white/10 rounded-lg p-3"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.1 }}
                                    >
                                      <div className="w-6 h-6 border-2 border-green-400 rounded bg-green-400/20 flex-shrink-0">
                                        <motion.div
                                          className="w-full h-full flex items-center justify-center text-green-400 text-xs"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.5 + i * 0.1 }}
                                        >
                                          ✓
                                        </motion.div>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-sm truncate">{item.name}</div>
                                        <div className="text-xs text-gray-400">{item.meta}</div>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {currentDemo === 3 && (
                              <div className="space-y-6">
                                <h3 className="text-xl font-bold">Export</h3>
                                <div className="space-y-3">
                                  {['Plain Text', 'Markdown', 'Rich Text'].map((format, i) => (
                                    <motion.div
                                      key={format}
                                      className="bg-white/10 rounded-lg p-3 text-sm"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                    >
                                      {format}
                                    </motion.div>
                                  ))}
                                </div>
                                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-400/30">
                                  <div className="text-sm mb-1">iCloud</div>
                                  <div className="text-xs text-gray-300">
                                    iPhone and iPad up to date
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Controls */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">
                  Step {currentDemo + 1} of {demos.length}
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevDemo}
                    aria-label="Previous step"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </button>
                  <button
                    onClick={nextDemo}
                    aria-label="Next step"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-3xl font-bold text-white mb-4">
                    {demos[currentDemo].title}
                  </h4>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {demos[currentDemo].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex space-x-3">
                {demos.map((demo, index) => (
                  <button
                    key={demo.id}
                    onClick={() => setCurrentDemo(index)}
                    aria-label={`Go to step ${index + 1}`}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentDemo
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                        : 'bg-white/30 hover:bg-white/50 w-3'
                    }`}
                  />
                ))}
              </div>

              <motion.a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl shadow-purple-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get it on the App Store
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDemo
