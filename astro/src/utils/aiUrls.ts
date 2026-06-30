import { aiAssistants } from '../data/aiAssistants';

export function buildAiAssistantUrl(assistantId: string, urlPrompt: string): string {
    const encodedPrompt = encodeURIComponent(urlPrompt);
    const assistant = aiAssistants.find(a => a.id === assistantId);

    if (!assistant) {
        return 'https://chatgpt.com/'; // Safe fallback if unknown
    }

    if (assistant.supportsUrlPrefill === false) {
        return assistant.fallbackUrl;
    }

    switch (assistant.prefillStrategy) {
        case 'chatgpt-q':
            return `https://chatgpt.com/?q=${encodedPrompt}`;

        case 'gemini-ai-studio-prompt':
            // Using aistudio as primary based on instructions
            return `https://aistudio.google.com/prompts/new_chat?prompt=${encodedPrompt}`;

        case 'claude-best-effort':
            return `https://claude.ai/new?q=${encodedPrompt}`;

        case 'perplexity-search-q':
            return `https://www.perplexity.ai/search?q=${encodedPrompt}`;

        case 'copilot-q-best-effort':
            return `https://copilot.microsoft.com/?q=${encodedPrompt}`;

        case 'grok-q-best-effort':
            return `https://grok.com/?q=${encodedPrompt}`;

        default:
            return assistant.fallbackUrl;
    }
}
