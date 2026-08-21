import { useState } from 'react'
import { useMap } from 'react-leaflet'
import { Navigation } from 'lucide-react'

function GeolocationControl() {
  const map = useMap()
  const [loading, setLoading] = useState(false)

  const handleLocate = () => {
    setLoading(true)

    if (!navigator.geolocation) {
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        map.flyTo([latitude, longitude], 14, { duration: 1.5 })
        setLoading(false)
      },
      () => {
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  return (
    <div className="leaflet-bottom leaflet-right" style={{ zIndex: 500 }}>
      <div className="leaflet-control">
        <button
          onClick={handleLocate}
          disabled={loading}
          className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
          title="Ma position"
        >
          <Navigation className={`w-5 h-5 text-primary ${loading ? 'animate-pulse' : ''}`} />
        </button>
      </div>
    </div>
  )
}

export default function GeolocationButton() {
  return <GeolocationControl />
}
