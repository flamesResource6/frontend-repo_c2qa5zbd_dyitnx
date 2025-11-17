import { motion } from 'framer-motion'
import { Shield, Skull, Eye } from 'lucide-react'

export function WhatIs() {
  return (
    <section className="relative bg-black py-24 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What is Control Zero?</h2>
          <p className="mt-4 text-cyan-100/90">
            Control Zero is a techno myth emerging from the decentralized web. A glitch. A rebellion waiting for architects.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.2),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,200,0.2),transparent_60%)]" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function WhyYouMatter() {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#07090c] py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Why you matter</h2>
        <p className="mt-4 text-cyan-100/90 max-w-3xl mx-auto">
          This is the genesis moment. Nothing is fixed. You shape the DNA. You are not a fan. You are a co-founder.
        </p>
        <a href="#waitlist" className="inline-block mt-8 px-6 py-3 rounded-md bg-black/70 backdrop-blur border border-cyan-400/50 text-white font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:border-cyan-300 transition">Join the Waitlist</a>
      </div>
    </section>
  )
}

export function Factions() {
  const items = [
    { title: 'CYDEF', text: 'Order. Control. Central chains.', Icon: Shield },
    { title: 'VIRBIZZ', text: 'Chaos. Profit. The undernet.', Icon: Skull },
    { title: 'ENTROPY SYNDICATE', text: 'Liberation. Decentralized destiny.', Icon: Eye },
  ]
  return (
    <section className="relative bg-black py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Factions</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, text, Icon }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(34,211,238,0.05),transparent)]" />
              <Icon className="w-8 h-8 text-cyan-400" />
              <h3 className="mt-4 text-xl font-semibold text-white tracking-wide">{title}</h3>
              <p className="mt-2 text-cyan-100/90">{text}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#vote" className="inline-block px-6 py-3 rounded-md bg-white/5 backdrop-blur border border-cyan-400/40 text-cyan-200 hover:text-white hover:border-cyan-300 transition">Vote on Faction Evolution</a>
        </div>
      </div>
    </section>
  )
}

export function HowToContribute() {
  const steps = [
    'Vote in genesis polls',
    'Create early fan content',
    'Spread the signal',
  ]
  return (
    <section className="relative bg-[#07090c] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">How to contribute</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-black/60 p-6 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-cyan-400/20 border border-cyan-300/30 flex items-center justify-center text-cyan-300 font-bold">{i + 1}</div>
              <p className="mt-4 text-cyan-100/90">{s}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#discord" className="inline-block px-6 py-3 rounded-md bg-black/70 backdrop-blur border border-cyan-400/50 text-white font-semibold hover:border-cyan-300 transition">Enter Discord Node</a>
        </div>
      </div>
    </section>
  )
}

export function WorldFragments() {
  const items = new Array(6).fill(0)
  return (
    <section className="relative bg-black py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Genesis Fragments</h2>
          <a href="#fragments" className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-cyan-200 hover:text-white hover:border-cyan-300">Explore</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
              <div className="aspect-[16/10]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,255,255,0.12),transparent_60%)]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ComingSoon() {
  const items = [
    { title: 'Membership NFT', text: 'A hybrid identity and utility NFT. Your origin badge that unlocks gated channels, early lore, cosmetic perks, or creator tools as voted by the community.' },
    { title: 'Token', text: 'A light gamified utility token. Earn by contributing lore, characters, tools, or joining genesis events. Use tokens for access perks, cosmetics, faction boosts, or enhanced voting influence.' },
    { title: 'DAO', text: 'A hybrid governance structure blending art collective and builder coordination. Token holders help steer creative direction, approve micro-game concepts, shape factions, and guide lore expansion.' },
    { title: 'Micro Games', text: 'Interactive lore fragments. Short choose-your-own-adventure text games that reveal myth, characters, and faction tensions. Built with early devs and writers.' },
    { title: 'First Canon Arc', text: 'The first major narrative arc shaped through community votes focused on character creation. Early contributors define the identities, motives, and conflicts of the universe’s first canon personalities.' },
  ]
  return (
    <section className="relative bg-[#07090c] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Coming Soon</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-black/60 p-6">
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-cyan-100/90">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Creator() {
  return (
    <section className="relative bg-black py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">The Creator</h2>
        <p className="mt-2 text-cyan-100/90">Noam Sa-Man</p>
        <p className="mt-4 text-cyan-100/90 max-w-2xl mx-auto">Digital world-builder exploring myth and code. Control Zero is the spark. The rest is collective.</p>
        <a href="#discord" className="inline-block mt-8 px-6 py-3 rounded-md bg-white/5 border border-white/10 text-cyan-200 hover:text-white hover:border-cyan-300">Connect on Discord</a>
      </div>
    </section>
  )
}
