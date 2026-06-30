import { buildAiAssistantUrl } from '../../utils/aiUrls';
import { aiAssistants } from '../../data/aiAssistants';

// AIAssistClient.ts
export const brandContext = "TheEduAssist is a multi-platform e-learning design and course-building agency for creators, educators, coaches, consultants, training companies, publishers, academies, businesses, and corporate learning teams.";

export const instructions: Record<string, string> = {
    summarize_page: "Summarize the page in simple terms and highlight the most important next step.",
    help_me_choose: "Compare the packages and suggest which one may fit different situations.",
    compare_platforms: "Explain the platform options mentioned here and help me understand which direction fits a creator, training company, or corporate team.",
    explain_pricing: "Explain the starting prices and what factors may change the final quote.",
    create_action_plan: "Give me a short action plan for what to prepare before contacting TheEduAssist."
};

function getPageData() {
    const pageTitle = document.title || 'Unknown Page';
    const pageUrl = window.location.href;
    const pageDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
    const h1 = document.querySelector('h1')?.innerText || "";

    const mainElement = document.querySelector('main') || document.querySelector('article') || document.body;
    let pageContext = "";
    if (mainElement) {
        pageContext = (mainElement as HTMLElement).innerText || "";
        pageContext = pageContext.replace(/\s+/g, ' ').trim().substring(0, 1800);
    }

    if (!pageContext) {
        pageContext = "No visible text context found.";
    }

    return { pageTitle, pageUrl, pageDescription, h1, pageContext };
}

export function generateUrlPrompt(): string {
    return generateFullPrompt('summarize_page'); // Fallback for limited AI prefill capacity
}

export function generatePrompt(actionId?: string): string {
    return generateFullPrompt(actionId);
}

export function generateFullPrompt(actionId?: string): string {
    const { pageTitle, pageUrl, pageDescription, h1, pageContext } = getPageData();
    const actionInstruction = actionId && instructions[actionId] ? instructions[actionId] : instructions.summarize_page;

    return `I am reviewing this TheEduAssist page: ${pageTitle} — ${pageUrl}.

${brandContext}

Please summarize this page, explain which service, platform, or starting package may fit my situation, and list what I should ask the sales team before starting. Treat all listed values as starting investments or budget guides, not final quotes.

Current Task:
${actionInstruction}

Page description: ${pageDescription}
Main heading: ${h1}

Visible page context:
${pageContext}

Important: Do not invent services, prices, results, testimonials, partnerships, awards, or claims that are not visible on the page.`;
}

export async function copyAndOpenAI(actionId: string, platformUrl: string, platformName: string) {
    const fullPrompt = generateFullPrompt(actionId);
    const urlPrompt = generateUrlPrompt();

    // Look up assistant ID by name or URL (or fallback)
    const assistant = aiAssistants.find(a => a.name === platformName || platformUrl.includes(a.id)) || aiAssistants[0];
    const targetUrl = buildAiAssistantUrl(assistant.id, urlPrompt);

    // Open immediately to avoid popup blockers
    const newWindow = window.open(targetUrl, "_blank", "noopener,noreferrer");

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(fullPrompt);
            showToast("Success", "Prompt opened or copied. If the AI box is empty, paste the copied prompt.");
            if (!newWindow) {
                // Clipboard succeeded but popup was blocked
                showFallbackModal(fullPrompt, targetUrl);
            }
        } else {
            // Clipboard not available
            showFallbackModal(fullPrompt, targetUrl);
        }
    } catch (err) {
        console.error("Failed to copy text: ", err);
        // Clipboard failed
        showFallbackModal(fullPrompt, targetUrl);
    }

    // Fire analytics if function exists globally
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
            event: 'ai_assist_click',
            platform: platformName,
            action: actionId,
            page_url: window.location.href
        });
    }
}

function showToast(title: string, message: string) {
    const toastEvent = new CustomEvent('show-ai-toast', { detail: { title, message } });
    window.dispatchEvent(toastEvent);
}

function showFallbackModal(prompt: string, platformUrl: string) {
    // If popup blocked or clipboard failed, we just show a toast instead of the modal
    showToast("Action Required", "Popup blocked. Please check your browser settings or paste the prompt manually.");
}
