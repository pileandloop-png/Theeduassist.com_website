# Firebase Forms Setup

This document outlines the foundation for handling form submissions (Contact, Project Inquiry, Audit Request) via Firebase.

## Setup Instructions

1. **Create Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. **Register Web App:** In project settings, register a web app to get your config keys.
3. **Environment Variables:** Update `.env` (or set in Cloudflare Pages dashboard) with `PUBLIC_FIREBASE_*` variables found in `.env.example`.
4. **Firestore Database:** Enable Firestore in the Firebase console. Create a `leads` collection.

## Why Backend/Function is Required

Directly writing to Firestore from the browser (`client-side writes`) is a security risk. To securely handle submissions and validate anti-spam checks:
- Leads MUST go through a backend API or Firebase Function.
- The function will validate the Turnstile token.
- Only the function/admin will have write access to the `leads` collection in Firestore.

## Testing Forms
- Forms currently redirect to `/thank-you/?type=X` locally.
- When connected, ensure you test the Turnstile integration and check Firestore to see if leads appear.

## Email Notifications
- Once a lead is saved, the Firebase Function can use an API (SendGrid, Resend) to send a notification to `info@theeduassist.com`.
- Keys for these services should ONLY live in the backend environment.

## Data Constraints
- **DO NOT** store payment data, passwords, or highly sensitive info in this collection.
- Keep data structured and clean.
