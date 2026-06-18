// Helper functions and types for Turnstile

export interface TurnstileVerificationResult {
  success: boolean;
  errorCodes?: string[];
  challengeTs?: string;
  hostname?: string;
}

/**
 * Validates a Turnstile token against the Cloudflare API.
 *
 * IMPORTANT: This MUST be executed server-side to keep the secret key secure.
 *
 * @param token The token received from the frontend widget
 * @param secretKey The TURNSTILE_SECRET_KEY
 * @returns Result of the verification
 */
export async function validateTurnstileToken(token: string, secretKey: string): Promise<TurnstileVerificationResult> {
  if (!token) {
    return { success: false, errorCodes: ['missing-input-response'] };
  }

  if (!secretKey) {
    console.error('Missing TURNSTILE_SECRET_KEY for validation.');
    return { success: false, errorCodes: ['missing-secret-key'] };
  }

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);

    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      body: formData,
      method: 'POST',
    });

    const outcome = await result.json();
    return {
      success: outcome.success,
      errorCodes: outcome['error-codes'] || [],
      challengeTs: outcome.challenge_ts,
      hostname: outcome.hostname,
    };
  } catch (error) {
    console.error('Error validating Turnstile token:', error);
    return { success: false, errorCodes: ['validation-request-failed'] };
  }
}
