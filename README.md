# Letlink — Official Launch Countdown

A modern, responsive launch countdown landing page for **Letlink**, counting down to **29 October 2026 at 11:00 AM IST (UTC+05:30)**.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

---

## 🎨 Visual Design & Color Palette

- **Background**: `#070B14`
- **Primary Blue**: `#3B82F6`
- **Accent Blue**: `#60A5FA`
- **Main Text**: `#FFFFFF`
- **Secondary Text**: `#94A3B8`
- **Card Background**: `#111827` (Glassmorphism with subtle borders and glow)

---

## ⏱️ Target Launch Details

- **Target ISO Timestamp**: `2026-10-29T11:00:00+05:30`
- **Target UTC**: `2026-10-29T05:30:00.000Z`
- **Reference Timezone**: Indian Standard Time (IST / UTC+05:30)
- **Live Units**: Days, Hours, Minutes, Seconds (zero-padded)

---

## 🌟 Key Features

1. **Hydration Safe Real-Time Countdown**:
   - Calculates the exact millisecond delta between target UTC timestamp and `Date.now()`.
   - Timezone-agnostic: accurate regardless of the client's local system timezone.
   - Initial unmounted state safely matches SSR output, eliminating hydration flash and layout shifts.
   - Cleans up `setInterval` on component unmount.

2. **Launch Completion State**:
   - Automatically halts interval when the target moment is reached.
   - Displays the celebratory heading **"We're Live!"**, message **"The wait is over. Welcome to Letlink."**, and a direct **"Explore Letlink"** button linking to the homepage (`/`).

3. **Responsive & Accessible**:
   - 4-card layout on desktop; compact mobile-optimized grid preventing horizontal scrolling.
   - Semantic HTML (`<header>`, `<main>`, `<footer>`, `<time>`, ARIA live regions, `role="timer"`).
   - Fully respects `prefers-reduced-motion`.

---

## 🛠️ Scripts & Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Runs production server locally |
| `npm run lint` | Runs Next.js ESLint checks |
| `npm run type-check` | Runs TypeScript type verification (`tsc --noEmit`) |
| `npm test` | Runs the automated test suite |

---

## 🧪 Testing Verification

You can test both the live countdown and launch states:

```bash
# Run unit & component verification tests
npm test

# Test the celebratory launch state interactively
# Run dev or start server, then visit:
http://localhost:3000/?live=true
```
