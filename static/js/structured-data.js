/**
 * Generate JSON-LD structured data for improved SEO
 */
(function() {
  function generateStructuredData() {
    const url = window.location.href;
    const isHomepage = url === window.location.origin + '/' || url === window.location.origin;
    const isDocsPage = url.includes('/docs/');
    const isBlogPost = !isHomepage && !isDocsPage && document.querySelector('article');

    let structuredData = {};

    // Website schema for all pages
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Go Vibe Coding',
      'url': window.location.origin,
      'description': 'A blog about coding with good vibes, tutorials, and programming tips',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${window.location.origin}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    // Add BlogPosting schema for blog posts
    if (isBlogPost) {
      const article = document.querySelector('article');
      const title = document.querySelector('h1')?.textContent || document.title;
      const description = document.querySelector('meta[name="description"]')?.content || '';
      const datePublished = article.querySelector('time')?.datetime || '';
      const author = article.querySelector('.avatar__name')?.textContent || 'Go Vibe Coding';

      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': url
        },
        'headline': title,
        'description': description,
        'image': document.querySelector('meta[property="og:image"]')?.content || `${window.location.origin}/img/og-image.png`,
        'author': {
          '@type': 'Person',
          'name': author
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Go Vibe Coding',
          'logo': {
            '@type': 'ImageObject',
            'url': `${window.location.origin}/img/logo.svg`
          }
        },
        'datePublished': datePublished,
        'dateModified': datePublished
      };
    }

    // Add additional structured data for docs
    if (isDocsPage) {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': document.querySelector('h1')?.textContent || document.title,
        'description': document.querySelector('meta[name="description"]')?.content || '',
        'author': {
          '@type': 'Organization',
          'name': 'Go Vibe Coding'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Go Vibe Coding',
          'logo': {
            '@type': 'ImageObject',
            'url': `${window.location.origin}/img/logo.svg`
          }
        }
      };
    }

    // Add the structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  // Run when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateStructuredData);
  } else {
    generateStructuredData();
  }
})();