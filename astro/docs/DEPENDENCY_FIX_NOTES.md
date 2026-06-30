# Dependency and Firebase Hosting Fix Notes

This document explains the steps taken to resolve the deployment-blocking issues with the project.

## 1. What caused the npm ERESOLVE issue
The issue was caused by a conflicting peer dependency between the deprecated `@astrojs/tailwind` integration (v6.0.2) and the `astro` root package (v6.4.7). `@astrojs/tailwind` only supported Astro versions up to v5, causing npm to abort the installation with an ERESOLVE error.

## 2. What changed
To fix this:
* Uninstalled the deprecated `@astrojs/tailwind` package.
* Installed the latest `tailwindcss` (v4) to match the `@tailwindcss/vite` Vite plugin versions already present in the project.
* Removed the `tailwind()` call from the Integrations array in `astro.config.mjs` and instead added `tailwindcss()` as a Vite plugin.
* Migrated the Tailwind configuration variables (colors) from the deprecated `tailwind.config.cjs` format to the standard CSS `@theme` directive in `src/styles/global.css`.
* Deleted `tailwind.config.cjs`.

## 3. How to install now
The standard command for installation handles dependencies correctly. Run:

```bash
npm install
```

## 4. Why `--legacy-peer-deps` should no longer be needed
The peer dependency mismatch that required `--legacy-peer-deps` was entirely tied to the deprecated `@astrojs/tailwind` package looking for an older version of Astro. With the migration to the new `@tailwindcss/vite` integration natively supported by newer Tailwind/Vite/Astro stacks, there are no longer conflicting versions blocking the package resolution process.

## 5. What was fixed in `firebase.json`
The `firebase.json` deployment script failed because it contained a trailing comma at the end of the `ignore` array in the `hosting` object. The Firebase CLI expects strict JSON syntax without trailing commas. This was resolved by removing the trailing comma, allowing `firebase deploy --only hosting` commands to parse the configuration file successfully.
