import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function NotFound() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Head>
        <title>404 - Page Not Found | {siteConfig.title}</title>
        <meta name="description" content="The page you were looking for doesn't exist" />
        <meta name="keywords" content="404, not found, missing page" />
        <meta property="og:title" content={`404 - Page Not Found | ${siteConfig.title}`} />
        <meta property="og:description" content="The page you were looking for doesn't exist" />
      </Head>
      <Layout title="404 - Page Not Found">
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">Page Not Found</h1>
              <p>We couldn't find what you were looking for.</p>
              <div className="margin-vert--lg">
                <Link className="button button--primary" to="/">
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}