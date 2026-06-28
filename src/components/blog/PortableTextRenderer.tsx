import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from '../../sanity/client';

const builder = createImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Props {
  value: any;
}

const components: PortableTextComponents = {
  types: {
    imageWithAlt: ({ value }: any) => {
      if (!value?.asset) {
        return null;
      }
      try {
        return (
          <div className="my-8">
            <img
              src={urlFor(value).url()}
              alt={value.alt || ' '}
              className="w-full h-auto rounded-lg shadow-sm"
              loading="lazy"
            />
            {value.caption && (
              <p className="text-sm text-center text-slate-500 mt-2 italic">{value.caption}</p>
            )}
          </div>
        );
      } catch (e) {
        return null;
      }
    },
    image: ({ value }: any) => {
      if (!value?.asset) {
        return null;
      }
      try {
        return (
          <div className="my-8">
            <img
              src={urlFor(value).url()}
              alt={value.alt || ' '}
              className="w-full h-auto rounded-lg shadow-sm"
              loading="lazy"
            />
            {value.caption && (
              <p className="text-sm text-center text-slate-500 mt-2 italic">{value.caption}</p>
            )}
          </div>
        );
      } catch (e) {
        return null;
      }
    },
  },
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold text-slate-800 mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-slate-800 mt-6 mb-3">{children}</h4>,
    normal: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--color-primary)] pl-6 italic text-slate-700 my-8 py-2 bg-slate-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
      return (
        <a href={value?.href} target={target} rel={rel} className="text-[var(--color-primary)] hover:text-[var(--color-accent)] underline decoration-2 decoration-[var(--color-primary)]/30 hover:decoration-[var(--color-accent)] transition-colors">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export default function PortableTextRenderer({ value }: Props) {
  return (
    <div className="portable-text-content prose prose-lg prose-slate max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
