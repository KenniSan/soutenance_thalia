import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Banknote, ImageOff } from 'lucide-react'

export default function SiteCard({ site, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 relative cursor-pointer"
    >
      <Link to={`/sites/${site.slug}`} className="absolute inset-0 z-10" />
      <div className="relative overflow-hidden h-48 md:h-56">
        {site.image ? (
          <img
            src={site.image}
            alt={site.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
            <ImageOff className="w-12 h-12 text-primary/40" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
            {site.category}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="font-display text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {site.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {site.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {site.duration}
          </span>
          <span className="flex items-center gap-1">
            <Banknote className="w-3.5 h-3.5" />
            {site.price}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
