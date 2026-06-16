# Deployment Guide

## Project
TheEduAssist Astro website

## Production domain
https://theeduassist.com

## Deployment platform
Cloudflare Pages

## Build settings
* Framework preset: Astro
* Build command: `npm run build`
* Build output directory: `dist`
* Node version: use current project requirement or latest stable supported by Cloudflare Pages
* Root directory: `/` (unless repo structure changes)

## Pre-deployment commands
```bash
npm install
npm run build
```

## Preview deployment
Every pull request or branch should be deployed to a Cloudflare Pages preview URL before merging to production. This allows for rigorous QA testing before changes go live.

## Production deployment
Production should only be deployed from the `main` branch after QA approval. Cloudflare Pages handles these deployments automatically.
