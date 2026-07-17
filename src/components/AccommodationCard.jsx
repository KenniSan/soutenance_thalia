import { motion } from 'framer-motion'
import { Star, Phone, MapPin } from 'lucide-react'

export default function AccommodationCard({ accommodation, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
            {accommodation.type}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-semibold">{accommodation.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
          {accommodation.name}
        </h3>
        <p className="text-sm text-primary font-semibold mb-2">{accommodation.price}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {accommodation.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {accommodation.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
              {amenity}
            </span>
          ))}
          {accommodation.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
              +{accommodation.amenities.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            Près de {accommodation.nearSite}
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-primary" />
          <span className="text-sm text-gray-700">{accommodation.phone}</span>
        </div>
      </div>
    </motion.div>
  )
}
