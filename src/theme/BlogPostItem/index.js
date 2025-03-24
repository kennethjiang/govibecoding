import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogPostItemWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata } = props;

  // Only add structured data for blog posts
  if (!metadata) {
    return <BlogPostItem {...props} />;
  }

  // JSON-LD structured data for better SEO
  const postUrl = metadata.permalink ? `${siteConfig.url}${metadata.permalink}` : '';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': metadata.title,
    'description': metadata.description || 'Learn about vibe coding techniques and mindful development approaches',
    'datePublished': metadata.date,
    'dateModified': metadata.lastUpdatedAt || metadata.date,
    'url': postUrl,
    'keywords': 'vibe coding, flow state programming, positive coding, mindful development, developer well-being',
    'author': {
      '@type': 'Person',
      'name': metadata.authors?.[0]?.name || 'Go Vibe Coding',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Go Vibe Coding',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteConfig.url}/img/logo.svg`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': postUrl
    }
  };

  return (
    <>
      <Head>
        {metadata && (
          <>
            <script type="application/ld+json">
              {JSON.stringify(jsonLd)}
            </script>
            <meta name="keywords" content="vibe coding, flow state programming, positive coding, mindful development, developer well-being" />
          </>
        )}
      </Head>
      <BlogPostItem {...props} />
    </>
  );
}
