import { execSync } from 'node:child_process';
import fs from 'node:fs';

console.log('Running environment safety checks...');
let hasError = false;

// 1. Check if .env is tracked
try {
  const output = execSync('git ls-files .env').toString().trim();
  if (output === '.env') {
    console.error('❌ .env is tracked in git. It must be untracked.');
    hasError = true;
  } else {
    console.log('✅ .env is not tracked.');
  }
} catch (e) {
  console.log('✅ .env is not tracked.');
}

// 2. Check if .env.production is ignored
try {
  const output = execSync('git check-ignore .env.production').toString().trim();
  if (output === '.env.production') {
     console.log('✅ .env.production is ignored.');
  } else {
    console.error('❌ .env.production is not ignored.');
    hasError = true;
  }
} catch (e) {
  // git check-ignore returns non-zero if NOT ignored
  console.error('❌ .env.production is not ignored.');
  hasError = true;
}

// 3. Check if .env.local is ignored
try {
  const output = execSync('git check-ignore .env.local').toString().trim();
  if (output === '.env.local') {
     console.log('✅ .env.local is ignored.');
  } else {
    console.error('❌ .env.local is not ignored.');
    hasError = true;
  }
} catch (e) {
  console.error('❌ .env.local is not ignored.');
  hasError = true;
}

// 4. Check for PUBLIC_SANITY_VIEWER_TOKEN
try {
  const output = execSync('grep -R "PUBLIC_SANITY_VIEWER_TOKEN" . --exclude-dir=node_modules --exclude-dir=.git || true').toString().trim();
  // We ignore our own docs mentioning it
  const filteredOutput = output.split('\n').filter(line => !line.includes('docs/') && !line.includes('scripts/validate-env-safety.mjs') && !line.includes('scripts/create-production-env.mjs') && line.trim() !== '');
  if (filteredOutput.length > 0) {
    console.error('❌ PUBLIC_SANITY_VIEWER_TOKEN found in source code:');
    console.error(filteredOutput.join('\n'));
    hasError = true;
  } else {
    console.log('✅ No PUBLIC_SANITY_VIEWER_TOKEN found in source.');
  }
} catch (e) {}

// 5. Check for private_key in source
try {
  const output = execSync('grep -R "private_key" . --exclude-dir=node_modules --exclude-dir=.git || true').toString().trim();
  const filteredOutput = output.split('\n').filter(line => !line.includes('scripts/validate-env-safety.mjs') && !line.includes('docs/') && line.trim() !== '');
  if (filteredOutput.length > 0) {
    console.error('❌ private_key found in source code:');
    console.error(filteredOutput.join('\n'));
    hasError = true;
  } else {
    console.log('✅ No private_key found in source.');
  }
} catch (e) {}

// 6. Check for Firebase admin SDK key files
try {
  const output = execSync('grep -R "firebase-adminsdk" . --exclude-dir=node_modules --exclude-dir=.git || true').toString().trim();
  const filteredOutput = output.split('\n').filter(line => !line.includes('scripts/validate-env-safety.mjs') && !line.includes('docs/') && line.trim() !== '');
  if (filteredOutput.length > 0) {
    console.error('❌ firebase-adminsdk found in source code:');
    console.error(filteredOutput.join('\n'));
    hasError = true;
  } else {
    console.log('✅ No firebase-adminsdk found in source.');
  }
} catch (e) {}

// 7. Check if .env.example exists
if (fs.existsSync('.env.example')) {
  console.log('✅ .env.example exists.');
  const content = fs.readFileSync('.env.example', 'utf-8');
  if (content.includes('SANITY_VIEWER_TOKEN=sk') || content.includes('PUBLIC_FIREBASE_API_KEY=AIza')) {
    console.error('❌ .env.example appears to contain real secrets.');
    hasError = true;
  } else {
    console.log('✅ .env.example looks safe (no obvious real tokens).');
  }
} else {
  console.error('❌ .env.example is missing.');
  hasError = true;
}


if (hasError) {
  console.error('\n❌ Environment safety validation failed.');
  process.exit(1);
}

console.log('\n✅ All environment safety checks passed.');
