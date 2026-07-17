import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Banknote, MapPin, Calendar } from 'lucide-react'
import { sites } from '../data/sites'
import SiteCard from '../components/SiteCard'

export default function SiteDetail() {
  const { slug } = useParams()
  const site = sites.find((s) => s.slug === slug)

  if (!site) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Site non trouvé</h2>
          <Link to="/sites" className="text-primary hover:text-primary-dark">
            Retour aux sites
          </Link>
        </div>
      </div>
    )
  }

  const otherSites = sites.filter((s) => s.id !== site.id).slice(0, 3)

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Link to="/sites" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Retour aux sites
              </Link>
              <span className="inline-block px-3 py-1 bg-secondary/80 rounded-full text-xs font-semibold text-white mb-3">
                {site.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">{site.name}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">À propos de ce lieu</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{site.longDescription}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Galerie</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {site.gallery.map((img, i) => (
                    <motion.img
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      src={img}
                      alt=""
                      className="w-full h-48 object-cover rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 sticky top-28"
              >
                <h3 className="font-display text-xl font-bold text-gray-900 mb-6">Informations pratiques</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Durée de visite</p>
                      <p className="font-semibold text-gray-900">{site.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Banknote className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Tarif d'entrée</p>
                      <p className="font-semibold text-gray-900">{site.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Meilleure période</p>
                      <p className="font-semibold text-gray-900">{site.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Adresse</p>
                      <p className="font-semibold text-gray-900">{site.address}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/guides"
                  className="mt-6 block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Trouver un guide
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">Autres sites à découvrir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherSites.map((s, i) => (
              <SiteCard key={s.id} site={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
