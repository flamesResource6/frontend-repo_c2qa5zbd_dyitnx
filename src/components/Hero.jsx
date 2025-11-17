import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cosmic gradient layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-32 bg-[radial-gradient(circle_at_20%_10%,rgba(0,255,255,0.15),transparent_60%)]" />
        <div className="absolute -inset-32 bg-[radial-gradient(circle_at_80%_90%,rgba(180,0,255,0.15),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_18px_rgba(0,255,255,0.35)]"
        >
          Own the Origin. Shape the Code.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-cyan-100/90"
        >
          A collaborative cyberpunk storyworld at the spark of creation. Built by early rebels. Powered by the collective.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#waitlist"
            className="px-6 py-3 rounded-md bg-black/70 backdrop-blur border border-cyan-400/50 text-white font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:border-cyan-300 transition"
          >
            Join the Waitlist
          </a>
          <a
            href="#discord"
            className="px-6 py-3 rounded-md bg-white/5 backdrop-blur border border-white/20 text-cyan-200 hover:text-white hover:border-cyan-300 transition"
          >
            Enter Discord Node
          </a>
        </motion.div>
      </div>

      {/* HUD chrome */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-6 flex justify-center">
        <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>
    </section>
  )
}
