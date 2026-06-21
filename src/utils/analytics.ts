// Define the dataLayer shape to avoid TypeScript errors
declare global {
  interface Window {
    dataLayer: any[];
    trackEvent: (eventName: string, payload?: Record<string, any>) => void;
  }
}

/**
 * Initializes the dataLayer array if it doesn't exist yet.
 * Safe to call multiple times.
 */
export function initAnalytics() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];

    // Attach helper to window for easy access from inline scripts in Astro components
    if (!window.trackEvent) {
        window.trackEvent = trackEvent;
    }
  }
}

/**
 * Safely push an event to the dataLayer.
 * Fails silently if not in a browser environment or dataLayer is unavailable.
 * Strictly avoids PII (Personally Identifiable Information).
 */
export function trackEvent(eventName: string, payload: Record<string, any> = {}) {
  if (typeof window === 'undefined' || !window.dataLayer) return;

  // Security & Privacy Check: Strip any potential PII fields just in case
  const safePayload = { ...payload };
  const blockedKeys = ['email', 'phone', 'name', 'password', 'address', 'pii'];

  Object.keys(safePayload).forEach(key => {
    if (blockedKeys.some(blocked => key.toLowerCase().includes(blocked))) {
      delete safePayload[key];
    }
  });

  window.dataLayer.push({
    event: eventName,
    ...safePayload,
    // Add useful context without PII
    timestamp: new Date().toISOString(),
  });
}
