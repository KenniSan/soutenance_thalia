export const circuits = [
  {
    id: 1,
    name: "Découverte Nature & Culture",
    duration: "2 jours",
    difficulty: "Facile",
    description: "Un circuit complet pour découvrir les incontournables d'Abomey-Calavi : forêt tropicale, village lacustre et temple sacré.",
    stops: [
      "Forêt Classée de l'Abomey-Calavi",
      "Village Artisanal de Ganvié",
      "Temple des Pythons",
      "Marché de Dantokpa"
    ],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    price: "45 000 FCFA/personne",
    includes: ["Guide", "Transport", "Repas midi J1", "Entrées sites"],
    coordinates: [
      { lat: 6.45, lng: 2.35 },
      { lat: 6.42, lng: 2.40 },
      { lat: 6.44, lng: 2.38 },
      { lat: 6.37, lng: 2.43 }
    ]
  },
  {
    id: 2,
    name: "Aventure Lacustre",
    duration: "1 jour",
    difficulty: "Facile",
    description: "Journée complète sur le lac Nokoué avec visite de Ganvié, déjeuner de poissons frais et coucher de soleil sur l'eau.",
    stops: [
      "Embarcadère d'Abomey-Calavi",
      "Village de Ganvié",
      "Marché flottant",
      "Restaurant sur l'eau"
    ],
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
    price: "25 000 FCFA/personne",
    includes: ["Pirogue", "Guide", "Déjeuner", "Gilet de sauvetage"],
    coordinates: [
      { lat: 6.40, lng: 2.42 },
      { lat: 6.42, lng: 2.40 },
      { lat: 6.43, lng: 2.41 },
      { lat: 6.41, lng: 2.39 }
    ]
  },
  {
    id: 3,
    name: "Safari & Nature Sauvage",
    duration: "3 jours",
    difficulty: "Modéré",
    description: "Expédition vers le Parc de la Pendjari pour un safari photo mémorable. Observation de la faune sauvage dans son habitat naturel.",
    stops: [
      "Départ d'Abomey-Calavi",
      "Parc National de la Pendjari",
      "Safari matin et soir",
      "Retour Abomey-Calavi"
    ],
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    price: "120 000 FCFA/personne",
    includes: ["Transport 4x4", "Guide safari", "Hébergement 2 nuits", "Pension complète", "Entrées parc"],
    coordinates: [
      { lat: 6.45, lng: 2.35 },
      { lat: 6.48, lng: 2.30 },
      { lat: 6.50, lng: 2.28 },
      { lat: 6.45, lng: 2.35 }
    ]
  },
  {
    id: 4,
    name: "Gastronomie & Artisanat",
    duration: "1 jour",
    difficulty: "Facile",
    description: "Immersion dans la culture béninoise à travers sa gastronomie et son artisanat. Marché, atelier cuisine et visite d'artisans.",
    stops: [
      "Marché de Dantokpa",
      "Atelier de cuisine traditionnelle",
      "Village artisanal",
      "Dégustation de plats locaux"
    ],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    price: "20 000 FCFA/personne",
    includes: ["Guide", "Ingrédients cuisine", "Repas", "Souvenir artisanal"],
    coordinates: [
      { lat: 6.37, lng: 2.43 },
      { lat: 6.39, lng: 2.41 },
      { lat: 6.40, lng: 2.40 },
      { lat: 6.38, lng: 2.42 }
    ]
  }
]
