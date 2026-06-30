export type AIAssistant = {
  id: string;
  name: string; // Keep name for backwards compatibility or rename to label and change components
  shortLabel: string;
  baseUrl: string;
  fallbackUrl: string;
  supportsUrlPrefill: boolean | 'partial';
  prefillStrategy: string;
  active: boolean;
  note?: string;
  optionalDesktopUrlScheme?: string;
  color?: string; // Kept for compatibility if used
};

export const aiAssistants: AIAssistant[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    shortLabel: "GPT",
    supportsUrlPrefill: true,
    prefillStrategy: "chatgpt-q",
    baseUrl: "https://chatgpt.com/",
    fallbackUrl: "https://chatgpt.com/",
    active: true,
  },
  {
    id: "claude",
    name: "Claude",
    shortLabel: "Claude",
    supportsUrlPrefill: "partial",
    prefillStrategy: "claude-best-effort",
    baseUrl: "https://claude.ai/new",
    fallbackUrl: "https://claude.ai/new",
    optionalDesktopUrlScheme: "claude://claude.ai/new?q=",
    active: true,
  },
  {
    id: "gemini",
    name: "Gemini AI Studio",
    shortLabel: "Gemini",
    supportsUrlPrefill: "partial",
    prefillStrategy: "gemini-ai-studio-prompt",
    baseUrl: "https://aistudio.google.com/prompts/new_chat",
    fallbackUrl: "https://gemini.google.com/",
    note: "Use AI Studio for prefilled Gemini prompt. Regular gemini.google.com may not reliably support prompt prefill.",
    active: true,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    shortLabel: "PPLX",
    supportsUrlPrefill: "partial",
    prefillStrategy: "perplexity-search-q",
    baseUrl: "https://www.perplexity.ai/search",
    fallbackUrl: "https://www.perplexity.ai/",
    active: true,
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    shortLabel: "Copilot",
    supportsUrlPrefill: "partial",
    prefillStrategy: "copilot-q-best-effort",
    baseUrl: "https://copilot.microsoft.com/",
    fallbackUrl: "https://copilot.microsoft.com/",
    note: "Copilot URL prefill may not always place text directly in the input.",
    active: true,
  },
  {
    id: "grok",
    name: "Grok",
    shortLabel: "Grok",
    supportsUrlPrefill: "partial",
    prefillStrategy: "grok-q-best-effort",
    baseUrl: "https://grok.com/",
    fallbackUrl: "https://grok.com/",
    note: "Grok URL prefill may not be supported consistently.",
    active: true,
  }
];
