import { motion } from 'framer-motion'
import { Clock, Check } from 'lucide-react'

export default function CircuitCard({ circuit, index = 0 }) {
  const difficultyColor = {
    'Facile': 'bg-green-100 text-green-700',
    'Modéré': 'bg-yellow-100 text-yellow-700',
    'Difficile': 'bg-red-100 text-red-700'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={circuit.image}
          alt={circuit.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl font-bold text-white mb-1">{circuit.name}</h3>
          <div className="flex items-center gap-3 text-white/80 text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {circuit.duration}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColor[circuit.difficulty]}`}>
              {circuit.difficulty}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {circuit.description}
        </p>

        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Étapes</p>
          <div className="space-y-2">
            {circuit.stops.map((stop, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <span className="text-sm text-gray-700">{stop}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Inclus</p>
          <div className="flex flex-wrap gap-2">
            {circuit.includes.map((item) => (
              <span key={item} className="flex items-center gap-1 text-xs text-gray-600">
                <Check className="w-3 h-3 text-green-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">À partir de</p>
            <p className="text-lg font-bold text-primary">{circuit.price}</p>
          </div>
          <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors">
            Réserver
          </button>
        </div>
      </div>
    </motion.div>
  )
}
