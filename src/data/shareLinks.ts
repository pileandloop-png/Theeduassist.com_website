export type ShareLink = {
    id: string;
    name: string;
    getShareUrl: (url: string, title?: string) => string;
};

export const shareLinks: ShareLink[] = [
    {
        id: "linkedin",
        name: "LinkedIn",
        getShareUrl: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
        id: "facebook",
        name: "Facebook",
        getShareUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
        id: "x",
        name: "X (Twitter)",
        getShareUrl: (url, title) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}`
    },
    {
        id: "whatsapp",
        name: "WhatsApp",
        getShareUrl: (url) => `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`
    }
];
