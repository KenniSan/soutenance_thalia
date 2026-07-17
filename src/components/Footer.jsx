import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Camera } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="font-display text-lg font-bold">Abomey-Calavi</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Découvrez la richesse touristique de la commune d'Abomey-Calavi, entre nature, culture et traditions.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary">Navigation</h4>
            <ul className="space-y-2">
              {[
                { to: '/sites', label: 'Sites touristiques' },
                { to: '/hebergements', label: 'Hébergements' },
                { to: '/carte', label: 'Carte & Circuits' },
                { to: '/guides', label: 'Guides' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 text-sm hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4" />
                +229 21 36 00 00
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4" />
                tourisme@abomey-calavi.bj
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                Mairie d'Abomey-Calavi
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary">Suivez-nous</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Office du Tourisme d'Abomey-Calavi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
