# Project Plan: Synced Slideshow

## Overview
A web application that visualizes users' music with AI-generated images and effects, integrating with music and generative AI providers. The system is privacy-first, scalable, and minimizes server-side data retention.

---

## 1. Domains & Features

### 1.1 User Accounts & Persistence
- **Auth**: Email/password (MVP), social login (stretch).
- **Persistence**: All user data (settings, provider tokens, saved images) stored with third-party auth/persistence provider (e.g., Firebase, Supabase). No long-term storage on our server.
- **GDPR**: All user data removable via provider's delete API.

### 1.2 Music Provider Integrations
- **MVP**: Spotify (OAuth, playlist fetch, metadata, BPM, playback state).
- **Stretch**: Local files, other providers (Tidal, Apple Music, etc.).
- **Analysis**: Only integrate providers where real-time analysis is possible.

### 1.3 Generative AI Integrations
- **MVP**: Midjourney or Stable Diffusion API (user-provided keys/endpoints).
- **Stretch**: More providers, self-hosted endpoints, generative music.
- **Buffering**: Images generated and stored only until shown, unless pinned by user.

### 1.4 Slideshow & Visual Effects
- **Frontend**: React/Next.js, Canvas/WebGL for effects.
- **Sync**: Effects and image transitions synced to music (BPM, tempo).
- **Customization**: User controls for speed, effects, prompts.

### 1.5 Monetization
- **Ads**: Google AdSense or similar (banners, in-slideshow images).
- **Payments**: Stripe for subscriptions, content gating.
- **Premium**: Remove ads, unlock features.

### 1.6 Settings & Customization
- **UI**: Slideshow speed, effect intensity, prompt enrichment, theme.
- **Persistence**: Stored with auth provider.

---

## 2. Tech Stack & Architecture

- **Frontend**: Next.js (React), Tailwind CSS, Canvas/WebGL.
- **Backend**: Node.js (Express or Next.js API routes), scalable (serverless or containerized).
- **Auth/Persistence**: Firebase Auth or Supabase (user data, settings, saved images).
- **Music API**: Spotify Web API (OAuth, metadata, playback state).
- **AI API**: Midjourney, Stable Diffusion, user-provided endpoints.
- **Payments**: Stripe.
- **Ads**: Google AdSense.
- **Hosting**: Vercel/Netlify (frontend), Railway/Render/AWS (backend).

### Data Handling & Privacy
- No long-term storage of user data/images on our server.
- Images stored only until shown, unless pinned by user.
- All persistence via third-party provider, with one-call deletion.
- GDPR compliance by design.

---

## 3. Roadmap & Task Outline

### Phase 1: MVP
1. Set up monorepo, git, CI/CD.
2. Implement user auth (email/password, provider persistence).
3. Integrate Spotify (OAuth, playlist, metadata, BPM).
4. Integrate AI image provider (Midjourney/Stable Diffusion).
5. Build slideshow UI (fullscreen, basic effects, manual speed).
6. Settings page (slideshow speed, prompt, effect toggle).
7. Basic ads (banner).
8. Stripe payments (remove ads for premium).
9. Deploy to cloud.

### Phase 2: Stretch Goals
1. Social login, analytics, GDPR tools.
2. More music/AI providers, local file support.
3. Advanced effects (beat sync, parallax, etc.).
4. In-slideshow ads, premium-only features.
5. Accessibility, theming.

---

## 4. Action Items for Owner
- Set up accounts for: Spotify Developer, chosen auth/persistence provider (Firebase/Supabase), Stripe, AdSense, AI image provider(s).
- Provide API keys/secrets as needed (never checked into git).

---

## 5. Monorepo Structure (Proposed)
- `/apps/web` – Next.js frontend
- `/apps/api` – Node.js/Express or Next.js API routes backend
- `/packages/common` – Shared types/utilities
- `/docs` – Documentation

---

## 6. Notes
- All code and infra should be scalable and privacy-first.
- No user data or images stored on our server long-term.
- All persistence via third-party provider, with easy deletion.

---

*Last updated: 2025-06-18*
