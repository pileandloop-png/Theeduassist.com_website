// Firebase configuration (client-side safe)
// Values will be populated from import.meta.env by Astro
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp | undefined;

// Safe initialization to not break build if env vars are missing
try {
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  } else {
    console.warn('Firebase configuration is incomplete. Missing API_KEY or PROJECT_ID.');
  }
} catch (error) {
  console.error('Failed to initialize Firebase:', error);
}

export { app };
