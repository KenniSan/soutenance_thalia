import { motion } from 'framer-motion'
import { Star, Phone, Mail, Award } from 'lucide-react'

export default function GuideCard({ guide, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={guide.photo}
            alt={guide.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {guide.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Award className="w-3.5 h-3.5 text-secondary" />
              <span className="text-xs text-gray-500">{guide.experience} d'expérience</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-semibold">{guide.rating}</span>
              <span className="text-xs text-gray-400">({guide.reviews} avis)</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {guide.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {guide.specialties.map((spec) => (
            <span key={spec} className="px-2 py-1 bg-primary/10 rounded-md text-xs text-primary font-medium">
              {spec}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {guide.languages.map((lang) => (
            <span key={lang} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
              {lang}
            </span>
          ))}
        </div>

        <div className="bg-cream rounded-xl p-4 mb-4">
          <p className="text-xs text-gray-500 mb-1">Tarifs</p>
          <p className="text-sm font-semibold text-primary-dark">{guide.price}</p>
          <p className="text-xs text-gray-500">{guide.priceFull}</p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a href={`tel:${guide.phone}`} className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors">
            <Phone className="w-4 h-4" />
            Appeler
          </a>
          <a href={`mailto:${guide.email}`} className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors">
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>
      </div>
    </motion.div>
  )
}
