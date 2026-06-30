export function calculateReadingTime(text: string): number {
  if (!text) return 0;

  // Average reading speed: 220 words per minute
  const wpm = 220;

  // Remove HTML tags and extra whitespace
  const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();

  if (!cleanText) return 0;

  const words = cleanText.split(/\s+/).length;

  // Round up to the nearest minute
  return Math.ceil(words / wpm);
}

export function getWordCount(text: string): number {
    if (!text) return 0;
    const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
    if (!cleanText) return 0;
    return cleanText.split(/\s+/).length;
}
