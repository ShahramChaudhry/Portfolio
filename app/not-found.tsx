'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-heading text-9xl font-bold text-gradient mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Page Not Found
        </h2>
        <p className="text-grey-300 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-accent-mint text-primary-black font-heading font-bold text-lg rounded-xl hover:bg-accent-bright transition-colors"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

