# Firebase Security Notes

Ensuring data safety is critical when handling lead information.

## Rules and Guidelines

1. **Never Expose Secret Keys:**
   - `TURNSTILE_SECRET_KEY`, SendGrid API keys, and Firebase Admin credentials must never be exposed to the browser.
2. **No Public Read Access:**
   - The public should NEVER be able to read the `leads` collection.
3. **Avoid Direct Client Writes:**
   - While Firestore allows client writes with security rules, the best practice when using Turnstile is to route all submissions through a secure backend API/Function. This guarantees validation happens before the database write.
4. **Rate Limiting:**
   - Implement rate limiting on the backend API route if possible to prevent API abuse.
5. **Data Minimization:**
   - Do not request or store sensitive info (like SSN, credit cards) in these basic lead forms.
   - Private course files or intellectual property should not be uploaded via these forms.
