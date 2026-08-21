import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import { sites } from '../data/sites'
import { circuits } from '../data/circuits'
import CircuitCard from '../components/CircuitCard'
import GeolocationButton from '../components/GeolocationButton'

const customIcon = new L.DivIcon({
  html: `<div style="background-color: #2D6A4F; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
  className: 'custom-marker',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
})

export default function MapPage() {
  const [activeCircuit, setActiveCircuit] = useState(null)

  return (
    <div className="pt-20">
      <section className="relative py-12 md:py-20 bg-primary-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Carte & Circuits</h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              Explorez les sites et circuits touristiques sur la carte interactive
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[500px] mb-8 md:mb-12"
          >
            <MapContainer
              center={[6.50, 2.33]}
              zoom={11}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeolocationButton />
              {sites.map((site) => (
                <Marker key={site.id} position={[site.location.lat, site.location.lng]} icon={customIcon}>
                  <Popup>
                    <div className="p-2">
                      <h4 className="font-bold text-sm">{site.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{site.category} - {site.price}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {activeCircuit && (
                <Polyline
                  positions={activeCircuit.coordinates.map((c) => [c.lat, c.lng])}
                  color="#D4A843"
                  weight={4}
                  opacity={0.8}
                />
              )}
            </MapContainer>
          </motion.div>

          <div className="mb-6 md:mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">Circuit touristique</h2>
            <p className="text-gray-600 text-sm md:text-base">Cliquez sur le circuit pour voir son tracé sur la carte</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {circuits.map((circuit, i) => (
              <div
                key={circuit.id}
                onClick={() => setActiveCircuit(activeCircuit?.id === circuit.id ? null : circuit)}
                className={`cursor-pointer rounded-2xl transition-all ${
                  activeCircuit?.id === circuit.id ? 'ring-2 ring-secondary ring-offset-2' : ''
                }`}
              >
                <CircuitCard circuit={circuit} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
