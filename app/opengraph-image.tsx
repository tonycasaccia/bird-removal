import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'FlightPath Wildlife Services — Humane Bird Removal for Commercial Facilities'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Brand colors (sRGB equivalents of the site's navy / ocean-blue palette)
const NAVY = '#1d2b50'
const OCEAN = '#2e72c2'
const LIGHT = '#f4f6fb'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: NAVY,
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 96,
              height: 96,
              borderRadius: 20,
              background: OCEAN,
            }}
          >
            {/* Bird icon (Lucide "bird") */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke={LIGHT}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
              <path d="M10 18v3" />
              <path d="M14 17.75V21" />
              <path d="M7 18a6 6 0 0 0 3.84-10.61" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: LIGHT,
              letterSpacing: -1,
            }}
          >
            FlightPath Wildlife Services
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: LIGHT,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Humane Bird Removal for Commercial Facilities
          </div>
          <div style={{ fontSize: 30, color: '#aebed8', maxWidth: 820 }}>
            Fast, professional bird extraction for warehouses, distribution centers, and
            industrial buildings across Southern California.
          </div>
        </div>

        {/* Accent bar */}
        <div style={{ display: 'flex', height: 12, width: '100%', borderRadius: 999, background: OCEAN }} />
      </div>
    ),
    { ...size },
  )
}
