import { articles } from '../../../../data';
import ArticleViewContent from '../../../../components/ArticleViewContent';
import type { Metadata } from 'next';

// Return a list of `params` to populate the [id] dynamic segment
export function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find(a => a.id === resolvedParams.id);
  if (!article) return { title: 'Not Found' };
  
  const url = `https://assamportalhub.vercel.app/portal/${article.id}`;

  return {
    title: `${article.en.title} | AssamPortalHub`,
    description: article.metaDescription,
    keywords: article.keyword,
    alternates: {
      canonical: `/portal/${article.id}`,
    },
    openGraph: {
      title: article.en.title,
      description: article.metaDescription,
      url: url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.en.title,
      description: article.metaDescription,
    }
  };
}

export default async function ArticlePage({ params }: any) {
  const resolvedParams = await params;
  const article = articles.find(a => a.id === resolvedParams.id);
  
  if (!article) {
    return <ArticleViewContent article={article} />;
  }

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.en.title,
    description: article.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'AssamPortalHub',
      url: 'https://assamportalhub.vercel.app'
    },
    publisher: {
      '@type': 'Organization',
      name: 'AssamPortalHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://assamportalhub.vercel.app/favicon.ico'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://assamportalhub.vercel.app/portal/${article.id}`
    }
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.en.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        key="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      {article.en.faqs && article.en.faqs.length > 0 && (
        <script
          key="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <ArticleViewContent article={article} />
    </>
  );
}
