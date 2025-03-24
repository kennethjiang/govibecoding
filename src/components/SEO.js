import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SEO({
  title,
  description,
  image,
  keywords = [],
  children,
}) {
  const { siteConfig } = useDocusaurusContext();
  const { pathname } = useLocation();

  const metaTitle = title || siteConfig.title;
  const metaDescription = description || siteConfig.tagline;
  const metaImage = image || siteConfig.themeConfig.image;
  const metaUrl = `${siteConfig.url}${pathname}`;

  const metaKeywords = [
    ...keywords,
    'vibe coding', 'AI-assisted programming', 'LLM-generated code',
    'natural language programming', 'prompt engineering', 'conversational coding',
    'AI programming', 'Andrej Karpathy', 'LLM coding',
  ].join(', ');

  return (
    <Head>
      {/* Basic metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {metaImage && <meta property="og:image" content={`${siteConfig.url}${metaImage}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && <meta name="twitter:image" content={`${siteConfig.url}${metaImage}`} />}

      {children}
    </Head>
  );
}

// Blog post specific SEO component
export function BlogPostSEO() {
  const { metadata } = useBlogPost();
  const { frontMatter, title, description, date, tags, permalink } = metadata;
  const keywords = tags.map(tag => tag.label);

  return (
    <SEO
      title={title}
      description={description || frontMatter.description}
      image={frontMatter.image}
      keywords={keywords}
    >
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />
      {tags.map((tag, i) => (
        <meta property="article:tag" content={tag.label} key={i} />
      ))}
    </SEO>
  );
}