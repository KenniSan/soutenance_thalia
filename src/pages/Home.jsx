import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Compass, Users, Star } from 'lucide-react'
import SiteCard from '../components/SiteCard'
import CircuitCard from '../components/CircuitCard'
import GuideCard from '../components/GuideCard'
import HeroCarousel from '../components/HeroCarousel'
import { sites } from '../data/sites'
import { circuits } from '../data/circuits'
import { guides } from '../data/guides'
import { videos } from '../data/videos'

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroCarousel />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6">
              Bienvenue à Abomey-Calavi
            </span> */}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Découvrez les <span className="text-secondary">perles</span> d'Abomey-Calavi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Découvrez des paysages époustouflants, une culture riche et des expériences inoubliables au cœur de la commune d'Abomey-Calavi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/sites"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Découvrir les sites
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/carte"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Voir la carte
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, label: 'Sites touristiques', value: '18', desc: 'Lieux à découvrir' },
              { icon: Users, label: 'Guides certifiés', value: '5+', desc: 'Experts locaux' },
              { icon: Star, label: 'Satisfaction', value: '4.8/5', desc: 'Note moyenne' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center p-6 md:p-8 rounded-2xl bg-cream/50"
              >
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-4" />
                <p className="text-2xl md:text-3xl font-bold text-primary-dark font-display">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">À découvrir</span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gray-900 mt-2">Sites touristiques populaires</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Des forêts tropicales aux villages lacustres, explorez les trésors d'Abomey-Calavi.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sites.slice(0, 3).map((site, i) => (
              <SiteCard key={site.id} site={site} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/sites"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all"
            >
              Voir tous les sites
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Parcours</span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gray-900 mt-2">Circuit touristique</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Un itinéraire pensé pour vous faire vivre une expérience complète.
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {circuits.map((circuit, i) => (
              <CircuitCard key={circuit.id} circuit={circuit} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/carte"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all"
            >
              Voir le circuit sur la carte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Vidéos</span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gray-900 mt-2">Découvrez en vidéo</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explorez les sites touristiques d'Abomey-Calavi à travers nos vidéos.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-primary-dark"
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-white">{video.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Accompagnement</span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gray-900 mt-2">Nos guides touristiques</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Des experts locaux passionnés pour enrichir votre découverte.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.slice(0, 3).map((guide, i) => (
              <GuideCard key={guide.id} guide={guide} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all"
            >
              Voir tous les guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
              Prêt à vivre l'aventure ?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Contactez-nous pour planifier votre séjour à Abomey-Calavi.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-colors"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
