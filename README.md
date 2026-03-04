# UAE-Oman Border Wait Times

Live estimated wait times at UAE-Oman border crossings, displayed on an interactive map with military base locations.

## Features

- Real-time border delay estimates for 6 crossings (Hatta, Al Ain, Khatmat Malaha, Wam, Dibba, Tibat)
- Direction toggle: UAE → Oman / Oman → UAE
- 30 military bases across UAE & Oman with multi-nation flag markers
- Hover tooltips for all markers
- Auto-refresh every 15 minutes
- Free map tiles (OpenStreetMap) — no client-side API key needed

## How It Works

The app uses the **Google Routes API** to calculate ETA from ~5km before to ~5km after each border crossing with live traffic. The difference between `duration` (with traffic) and `staticDuration` (without) gives an estimated border delay.

## Setup

### 1. Google Cloud Console

1. Create a project at [console.cloud.google.com](https://console.cloud.google.com)
2. Enable billing (required for API access; $200/month free credit included)
3. Enable **Routes API** ([direct link](https://console.cloud.google.com/apis/library/routes.googleapis.com))
4. Create an API key under **APIs & Services → Credentials**
5. Restrict the key to **Routes API** only (for security)

### 2. Install & Run

```bash
git clone https://github.com/pepomes/border-wait-times.git
cd border-wait-times
npm install
cp .env.example .env.local
# Edit .env.local and add your API key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Verify

```bash
curl http://localhost:3000/api/wait-times
```

Should return JSON with all 6 crossings and wait time estimates.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_MAPS_API_KEY` | Yes | Server-only. Google Routes API key. Never exposed to the browser. |

See `.env.example` for the template.

## Cost

~12 Routes API calls per refresh (6 crossings × 2 directions). With 15-min caching, that's ~1,150 calls/day at continuous usage. Google offers $200/month free credit which covers ~40,000 Routes API calls.

## Limitations

- Estimates are based on road traffic congestion, not actual border processing time
- Low traffic doesn't guarantee fast processing; construction near borders can inflate estimates
- Best accuracy during peak hours (Thursday/Friday evenings, holidays) when traffic correlates strongly with border queues

## Tech Stack

- Next.js 15 (App Router, TypeScript, Tailwind CSS v4)
- Leaflet + react-leaflet (OpenStreetMap tiles)
- Google Routes API (server-side only)
