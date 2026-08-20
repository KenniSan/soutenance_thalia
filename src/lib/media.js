export function mediaUrl(path) {
  const r2 = import.meta.env.VITE_R2_URL
  if (!r2) return path
  const filename = path.split('/').pop()
  return `${r2}/${filename}`
}
