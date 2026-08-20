import { execFileSync } from 'child_process'
import { readdirSync, statSync, renameSync } from 'fs'
import { join } from 'path'

const ffmpeg = (await import('ffmpeg-static')).default
const DIR = 'public/videos'

const SCALE = '1920:-2'
const CRF = '23'
const PRESET = 'medium'
const AUDIO_BITRATE = '128k'

const files = readdirSync(DIR).filter(f => f.endsWith('.mp4'))

for (const f of files) {
  const src = join(DIR, f)
  const tmp = src.replace('.mp4', '.tmp.mp4')
  const sizeBefore = statSync(src).size

  console.log(`\n[${f}]`)
  console.log(`  Avant: ${(sizeBefore / 1048576).toFixed(1)} Mo`)

  try {
    execFileSync(ffmpeg, [
      '-i', src,
      '-vf', `scale=${SCALE}`,
      '-c:v', 'libx264',
      '-crf', CRF,
      '-preset', PRESET,
      '-c:a', 'aac',
      '-b:a', AUDIO_BITRATE,
      '-movflags', '+faststart',
      '-pix_fmt', 'yuv420p',
      '-y',
      tmp
    ], { stdio: 'inherit' })

    const sizeAfter = statSync(tmp).size
    renameSync(tmp, src)

    console.log(`  Après: ${(sizeAfter / 1048576).toFixed(1)} Mo`)
    console.log(`  Réduction: ${((1 - sizeAfter / sizeBefore) * 100).toFixed(0)}%`)

    if (sizeAfter > 300 * 1048576) {
      console.warn(`  ⚠️  > 300 Mo !`)
    }
  } catch (err) {
    console.error(`  Erreur: ${err.message}`)
  }
}

console.log('\n✅ Terminé.')
