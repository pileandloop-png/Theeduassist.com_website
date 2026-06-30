import fs from 'node:fs';

const requiredPublicVars = [
  'PUBLIC_SANITY_PROJECT_ID',
  'PUBLIC_SANITY_DATASET',
  'PUBLIC_SANITY_API_VERSION',
  'PUBLIC_FIREBASE_PROJECT_ID',
  'PUBLIC_FIREBASE_AUTH_DOMAIN',
  'PUBLIC_FIREBASE_STORAGE_BUCKET',
  'PUBLIC_FIREBASE_API_KEY',
  'PUBLIC_FIREBASE_APP_ID',
  'PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'PUBLIC_FIREBASE_MEASUREMENT_ID',
  'PUBLIC_SITE_URL',
  'PUBLIC_DEMO_SITE_URL',
];

const fallbacks = {
  PUBLIC_SANITY_PROJECT_ID: 'jg4gi6mn',
  PUBLIC_SANITY_DATASET: 'production',
  PUBLIC_SANITY_API_VERSION: '2026-06-19',
  PUBLIC_FIREBASE_PROJECT_ID: 'theeduassist-website-prod',
  PUBLIC_FIREBASE_AUTH_DOMAIN: 'theeduassist.com',
  PUBLIC_FIREBASE_STORAGE_BUCKET: 'theeduassist-website-prod.appspot.com',
  PUBLIC_SITE_URL: 'https://theeduassist.com',
  PUBLIC_DEMO_SITE_URL: 'https://theeduassist.com',
  PUBLIC_FIREBASE_API_KEY: 'mock-api-key',
  PUBLIC_FIREBASE_APP_ID: 'mock-app-id',
  PUBLIC_FIREBASE_MESSAGING_SENDER_ID: 'mock-sender-id',
  PUBLIC_FIREBASE_MEASUREMENT_ID: 'mock-measurement-id'
};

const optionalPrivateVars = ['SANITY_VIEWER_TOKEN'];

let hasError = false;
let envContent = '';

console.log('Generating .env.production from process.env...');

// Check and collect public vars
for (const varName of requiredPublicVars) {
  let value = process.env[varName];
  if (!value && fallbacks[varName] !== undefined) {
    console.log(`⚠️ ${varName} is missing, using fallback.`);
    value = fallbacks[varName];
  }

  if (value !== undefined && value !== null) {
    console.log(`✅ ${varName} is present`);
    envContent += `${varName}=${value}\n`;
  } else {
    console.error(`❌ Missing required variable: ${varName}`);
    hasError = true;
  }
}

// Check and collect optional private vars
for (const varName of optionalPrivateVars) {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName} is present (private)`);
    envContent += `${varName}=${value}\n`;
  } else {
    console.log(`ℹ️ ${varName} is missing (optional)`);
  }
}

// Ensure PUBLIC_SANITY_VIEWER_TOKEN is not created
if (process.env.PUBLIC_SANITY_VIEWER_TOKEN) {
  console.error(`❌ PUBLIC_SANITY_VIEWER_TOKEN must not be defined.`);
  hasError = true;
}

if (hasError) {
  console.error('\n❌ Failed to generate .env.production due to missing required variables.');
  process.exit(1);
}

fs.writeFileSync('.env.production', envContent.trim());
console.log('\n✅ .env.production generated successfully (secrets are not logged).');
