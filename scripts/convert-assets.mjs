import sharp from 'sharp'
import { readdirSync, mkdirSync, copyFileSync, existsSync, statSync } from 'fs'
import { join, extname, basename } from 'path'

const DATA_DIR = 'données '
const PHOTOS_DIR = join(DATA_DIR, 'photos')
const VIDEOS_DIR = join(DATA_DIR, 'video')
const PUBLIC_PHOTOS = 'public/photos'
const PUBLIC_VIDEOS = 'public/videos'

const FOLDER_TO_SLUG = {
  'Agoualand Photos': 'agoualand',
  "Bab\u2019s Dock Photos": 'babs-dock',
  'Chez Josias Photos': 'chez-josias',
  'Circuit Palais et Couvent , Marché et Embarcadère de Tokpa-Zoungo , Abomey-Calavi Centre Photos': 'circuit-centre',
  'Complexe Assouka Photos': 'complexe-assouka',
  'Holly land Parc Photos': 'holy-land',
  'Musée de la Récade Photos': 'musee-recade',
  'Natur Resort Photos': 'natu-resort',
  'Refuge animalier de la vallée Sitatunga Photos': 'refuge-sitatunga',
  'Sanctuaire des singes de Drabo-Gbo Photos': 'sanctuaire-drabo-gbo',
  'Sites des tortues de Togbin Photos': 'site-tortues',
  'Autres Photos': 'autres',
}

const VIDEO_RENAME = {
  "Bab's Dock.mp4": 'babs-dock.mp4',
  'Chez Josias.mp4': 'chez-josias.mp4',
  'Embarcadère.mp4': 'embarcadere.mp4',
  'musée de la récade.mp4': 'musee-recade.mp4',
  'Nature Resort Zinvié.mp4': 'natu-resort.mp4',
  'Refuge Sitatunga.mp4': 'refuge-sitatunga.mp4',
  'Sanctuaire des Singes.mp4': 'sanctuaire-singes.mp4',
}

function walk(dir) {
  const entries = readdirSync(dir)
  const files = []
  for (const e of entries) {
    const full = join(dir, e)
    const s = statSync(full)
    if (s.isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

function slugify(name) {
  return name
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function convertImage(src, destDir, index) {
  const ext = extname(src).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.heic', '.webp'].includes(ext)) return null
  const outName = `${String(index + 1).padStart(2, '0')}.webp`
  const outPath = join(destDir, outName)
  try {
    await sharp(src)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath)
    return outName
  } catch (err) {
    console.error(`  [skip] ${src}: ${err.message}`)
    return null
  }
}

async function processPhotos() {
  const topDirs = readdirSync(PHOTOS_DIR)
  for (const topDir of topDirs) {
    const topPath = join(PHOTOS_DIR, topDir)
    if (!statSync(topPath).isDirectory()) continue
    const innerDirs = readdirSync(topPath)
    for (const innerDir of innerDirs) {
      const innerPath = join(topPath, innerDir)
      if (!statSync(innerPath).isDirectory()) continue
      const slug = FOLDER_TO_SLUG[innerDir]
      if (!slug) {
        console.warn(`[warn] Dossier inconnu: "${innerDir}"`)
        continue
      }
      const destDir = join(PUBLIC_PHOTOS, slug)
      mkdirSync(destDir, { recursive: true })
      const files = readdirSync(innerPath).filter(f => {
        const e = extname(f).toLowerCase()
        return ['.jpg', '.jpeg', '.png', '.heic', '.webp'].includes(e)
      }).sort()
      console.log(`[${slug}] ${files.length} image(s)`)
      let i = 0
      for (const f of files) {
        const ok = await convertImage(join(innerPath, f), destDir, i)
        if (ok) i++
      }
    }
  }
}

function processVideos() {
  mkdirSync(PUBLIC_VIDEOS, { recursive: true })
  const files = readdirSync(VIDEOS_DIR)
  for (const f of files) {
    if (extname(f).toLowerCase() !== '.mp4') continue
    const newName = VIDEO_RENAME[f] || slugify(basename(f, '.mp4')) + '.mp4'
    const dest = join(PUBLIC_VIDEOS, newName)
    copyFileSync(join(VIDEOS_DIR, f), dest)
    console.log(`[video] ${f} -> ${newName}`)
  }
}

mkdirSync(PUBLIC_PHOTOS, { recursive: true })
await processPhotos()
await processVideos()
console.log('\nDone.')
