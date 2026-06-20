# Forms Notification Status

This document explains the current state of form submissions, notifications, and what is needed for complete functionality.

## Where leads are expected to go
All incoming leads submitted through the frontend forms (e.g., Contact Form, Free Audit Form) are currently expected to go to a secure Firebase backend for validation.

## What is implemented
* The frontend forms are fully implemented in the UI and properly send data to the endpoints when submitted.
* A basic Firebase Function placeholder exists (`functions/src/index.ts`) for lead validation and storage.
* Leads are intended to be stored in the Firestore `leads` collection.

## What is pending
* Cloudflare Turnstile anti-spam server-side validation is partially implemented but requires a real secret key to be fully functional.
* An email integration (e.g., SendGrid, Resend) within the Firebase Function to send a notification to `info@theeduassist.com` whenever a new lead is submitted.

## What secrets are needed later
* `TURNSTILE_SECRET_KEY`: To be provided to the Firebase Function for server-side anti-spam verification.
* Email Provider API Key: Needed by the Firebase Function to dispatch email notifications.
