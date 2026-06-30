import {DocumentActionProps, useDocumentOperation} from 'sanity'
import {useState} from 'react'

export function GenerateSeoAction({id, type, published, draft, onComplete}: DocumentActionProps) {
  const {patch} = useDocumentOperation(id, type)
  const [isGenerating, setIsGenerating] = useState(false)

  if (type !== 'post') return null

  return {
    label: isGenerating ? 'Generating...' : 'Generate SEO',
    disabled: isGenerating,
    onHandle: async () => {
      setIsGenerating(true)

      // In a real implementation, this would call an API route that uses OpenAI/Gemini
      // For now, we'll mock the provider-agnostic behavior

      const doc = draft || published
      const title = doc?.title || ''

      // Simulated AI Delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      patch.execute([
        {
          setIfMissing: {seo: {}},
        },
        {
          set: {
            'seo.metaTitle': `${title} | TheEduAssist`,
            'seo.metaDescription': `Learn more about ${title} in our latest blog post. Discover insights and strategies for E-learning design.`,
            'seo.keywords': ['e-learning', 'design', 'education', String(title).toLowerCase()],
            'seo.ogTitle': title,
            'seo.ogDescription': `Insights on ${title} from the experts at TheEduAssist.`,
          },
        },
      ])

      setIsGenerating(false)
      onComplete()
    },
  }
}
