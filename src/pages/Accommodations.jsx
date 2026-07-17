import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import AccommodationCard from '../components/AccommodationCard'
import { accommodations } from '../data/accommodations'

const types = ['Tous', 'Hôtel', 'Auberge', 'Résidence', 'Maison d\'hôtes', 'Eco-Lodge']

export default function Accommodations() {
  const [activeType, setActiveType] = useState('Tous')
  const [search, setSearch] = useState('')

  const filtered = accommodations.filter((acc) => {
    const matchType = activeType === 'Tous' || acc.type === activeType
    const matchSearch = acc.name.toLowerCase().includes(search.toLowerCase()) ||
      acc.description.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Hébergements</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Trouvez le logement idéal pour votre séjour à Abomey-Calavi
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un hébergement..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeType === type
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Aucun hébergement trouvé.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((acc, i) => (
                <AccommodationCard key={acc.id} accommodation={acc} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
