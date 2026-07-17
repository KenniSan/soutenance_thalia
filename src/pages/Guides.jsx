import { motion } from 'framer-motion'
import GuideCard from '../components/GuideCard'
import { guides } from '../data/guides'

export default function Guides() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Guides touristiques</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Des experts locaux passionnés pour vous accompagner dans votre découverte
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, i) => (
              <GuideCard key={guide.id} guide={guide} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
