import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Phone, Mail, Award, Copy, X, Check, User } from 'lucide-react'

export default function GuideCard({ guide, index = 0 }) {
  const [showContactModal, setShowContactModal] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-4 md:p-6">
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

        <button
          onClick={() => setShowContactModal(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          <User className="w-4 h-4" />
          Contacter
        </button>
      </div>

      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactModal(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="font-display text-xl font-bold text-gray-900">Contacter {guide.name}</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-gray-900">Téléphone</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <span className="flex-1 text-gray-700">{guide.phone}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(guide.phone)
                        setCopiedPhone(true)
                        setTimeout(() => setCopiedPhone(false), 2000)
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-600">Copier</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-gray-900">Email</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <span className="flex-1 text-gray-700 break-all">{guide.email}</span>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(guide.email)
                          setCopiedEmail(true)
                          setTimeout(() => setCopiedEmail(false), 2000)
                        }}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600">Copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-600">Copier</span>
                          </>
                        )}
                      </button>
                      <a
                        href={`mailto:${guide.email}`}
                        className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Envoyer</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
