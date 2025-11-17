import Hero from './components/Hero'
import { WhatIs, WhyYouMatter, Factions, HowToContribute, WorldFragments, ComingSoon, Creator } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <WhatIs />
      <WhyYouMatter />
      <Factions />
      <HowToContribute />
      <WorldFragments />
      <ComingSoon />
      <Creator />
      <footer className="bg-black/80 border-t border-white/10 py-10 text-center text-cyan-200/80">
        <p>© Control Zero — Genesis Build</p>
      </footer>
    </div>
  )
}

export default App
