# Sanity Beginner Guide

This guide explains how to work with the local Sanity Studio for TheEduAssist.

- Start Studio (dev with live reload): `npx sanity start`
- Build production preview: `npx sanity build` then `npx sanity preview`
- Schema files are located at `schemaTypes/`
- Object (reusable) types are under `schemaTypes/objects`
- Add images using the image field; provide meaningful `alt` text when possible.

If you make schema changes, either run the dev server (`npx sanity start`) or rebuild before preview.
