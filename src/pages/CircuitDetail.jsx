import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Banknote, MapPin, Check, Navigation } from 'lucide-react'
import { circuits } from '../data/circuits'
import CircuitCard from '../components/CircuitCard'
import Lightbox from '../components/Lightbox'
import { useState } from 'react'

export default function CircuitDetail() {
  const { slug } = useParams()
  const circuit = circuits.find((c) => c.slug === slug)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!circuit) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Circuit non trouvé</h2>
          <Link to="/circuits" className="text-primary hover:text-primary-dark">
            Retour aux circuits
          </Link>
        </div>
      </div>
    )
  }

  const otherCircuits = circuits.filter((c) => c.id !== circuit.id).slice(0, 3)

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={circuit.image}
          alt={circuit.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Link to="/circuits" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Retour aux circuits
              </Link>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white">{circuit.name}</h1>
              <div className="flex items-center gap-4 mt-4 text-white/80">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {circuit.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  {circuit.difficulty}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">À propos de ce circuit</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{circuit.description}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
                <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-4">Étapes du circuit</h3>
                <div className="space-y-4">
                  {circuit.stops.map((stop, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-cream/50 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{i + 1}</span>
                      </div>
                      <span className="text-gray-800 font-medium">{stop}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {circuit.gallery && circuit.gallery.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
                  <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-4">Galerie</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {circuit.gallery.map((img, i) => (
                      <motion.img
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        src={img}
                        alt=""
                        onClick={() => setLightboxIndex(i)}
                        className="w-full h-40 md:h-48 object-cover rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-4 md:p-6 sticky top-28"
              >
                <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-6">Informations pratiques</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Durée</p>
                      <p className="font-semibold text-gray-900">{circuit.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Banknote className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Tarif</p>
                      <p className="font-semibold text-gray-900">{circuit.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Difficulté</p>
                      <p className="font-semibold text-gray-900">{circuit.difficulty}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Inclus</p>
                      <p className="font-semibold text-gray-900">{circuit.includes.join(', ')}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/guides"
                  className="mt-6 block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Réserver ce circuit
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {otherCircuits.length > 0 && (
        <section className="py-8 md:py-16 bg-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-8">Autres circuits à découvrir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherCircuits.map((c, i) => (
                <CircuitCard key={c.id} circuit={c} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={circuit.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % circuit.gallery.length)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + circuit.gallery.length) % circuit.gallery.length)}
        />
      )}
    </div>
  )
}
