import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize admin app without credentials here; it uses default application credentials in the environment.
admin.initializeApp();

/**
 * Placeholder for the lead submission function.
 *
 * TODO:
 * 1. Read lead data from req.body
 * 2. Validate required fields
 * 3. Validate Turnstile token using TURNSTILE_SECRET_KEY
 * 4. Save lead to Firestore `leads` collection
 * 5. Send notification email (optional)
 * 6. Return success/redirect response
 */
export const submitLead = functions.https.onRequest(async (req, res) => {
  // Enforce POST method
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    // 1. Extract data
    const formData = req.body;

    // 2. Anti-spam honeypot check
    if (formData.website_url_hp) {
      console.log('Honeypot filled. Rejecting as spam.');
      res.redirect(303, '/thank-you/?type=spam');
      return;
    }

    // 3. (Optional but recommended) Verify Turnstile server-side
    // const turnstileToken = formData['cf-turnstile-response'];
    // const turnstileSecret = process.env.TURNSTILE_SECRET_KEY; // MUST be set in environment
    // const isValid = await validateTurnstile(turnstileToken, turnstileSecret);
    // if (!isValid) { res.status(400).send('Invalid Turnstile token'); return; }

    // 4. Save to Firestore (placeholder logic)
    /*
    const leadData = {
      ...formData,
      submittedAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'new',
    };
    await admin.firestore().collection('leads').add(leadData);
    */

    // 5. Redirect on success
    const type = formData.formType || 'contact';
    res.redirect(303, `/thank-you/?type=${type}`);

  } catch (error) {
    console.error('Error processing lead:', error);
    res.status(500).send('Internal Server Error');
  }
});
