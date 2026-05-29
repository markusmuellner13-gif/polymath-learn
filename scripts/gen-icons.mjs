import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { mkdirSync } from 'fs'

// The Polymath icon: deep purple gradient + geometric "P" letterform
// All paths — no font rendering needed, works everywhere

function buildSVG(size) {
  // Scale everything to the target size
  const s = size / 512

  // Helper to scale a coordinate
  const sc = n => Math.round(n * s * 10) / 10

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${size}" y2="${size}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="60%" stop-color="#5B21B6"/>
      <stop offset="100%" stop-color="#3730A3"/>
    </linearGradient>
    <radialGradient id="glow" cx="70%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#A78BFA" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#A78BFA" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${size}" height="${size}" fill="url(#bg)"/>

  <!-- Subtle top-right glow -->
  <rect width="${size}" height="${size}" fill="url(#glow)"/>

  <!-- ===== Letter P ===== -->
  <!-- Stem: solid white rectangle -->
  <rect
    x="${sc(118)}" y="${sc(88)}"
    width="${sc(88)}" height="${sc(336)}"
    rx="${sc(16)}"
    fill="white"
  />

  <!-- Bowl outer: D-shape arc -->
  <!-- The D goes from (206,88) curving right to (302,184) and back to (206,280) -->
  <path
    d="M ${sc(206)} ${sc(88)}
       A ${sc(96)} ${sc(96)} 0 0 1 ${sc(206)} ${sc(280)}
       L ${sc(206)} ${sc(88)} Z"
    fill="white"
  />

  <!-- Bowl inner cutout: same center, smaller radius, painted with bg color -->
  <path
    d="M ${sc(206)} ${sc(124)}
       A ${sc(60)} ${sc(60)} 0 0 1 ${sc(206)} ${sc(244)}
       L ${sc(206)} ${sc(124)} Z"
    fill="url(#bg)"
  />

  <!-- Connecting rectangle to fill gap between stem right edge and bowl left edge -->
  <rect
    x="${sc(180)}" y="${sc(88)}"
    width="${sc(26)}" height="${sc(192)}"
    fill="white"
  />
  <!-- Cutout over the connection fill -->
  <rect
    x="${sc(180)}" y="${sc(124)}"
    width="${sc(26)}" height="${sc(120)}"
    fill="url(#bg)"
  />

  <!-- Small sparkle dot — top right accent -->
  <circle cx="${sc(390)}" cy="${sc(110)}" r="${sc(14)}" fill="white" fill-opacity="0.25"/>
  <circle cx="${sc(390)}" cy="${sc(110)}" r="${sc(7)}" fill="white" fill-opacity="0.5"/>
</svg>`
}

async function makeIcon(size, filename) {
  const svg = buildSVG(size)
  const buf = Buffer.from(svg)

  await sharp(buf)
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(`public/${filename}`)

  console.log(`✓ public/${filename} (${size}×${size})`)
}

mkdirSync('public', { recursive: true })

await makeIcon(512, 'icon-512.png')
await makeIcon(192, 'icon-192.png')
await makeIcon(180, 'apple-touch-icon.png')

console.log('Icons generated successfully.')
