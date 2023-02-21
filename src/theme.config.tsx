import type { DocsThemeConfig } from 'nextra-theme-docs';
import { SoundiseLogo } from '@soundise/react-components';
import { useRouter } from 'next/router';

const url = 'https://docs.soundise.com';
const description =
  'Soundise is a self-hosted music streaming service that allows you to access your favorite tunes in an intuitive and customizable way. Our documentation is a comprehensive guide to help you set up, configure, and use Soundise smoothly.';

const theme: DocsThemeConfig = {
  logo: <SoundiseLogo width={96} />,
  project: {
    link: 'https://github.com/soundise',
  },
  chat: {
    link: 'https://discord.soundise.com',
  },
  docsRepositoryBase: 'https://github.com/soundise/docs/tree/main',
  primaryHue: 266,
  sidebar: {
    toggleButton: true,
  },
  // i18n: [
  //   { locale: 'en', text: 'English' },
  // ],
  navigation: true,
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()}{' '}
        <a
          href="https://soundise.com"
          target="_blank"
          rel="noreferrer"
          className="hover:nx-text-gray-800 dark:hover:nx-text-gray-200"
        >
          Soundise
        </a>{' '}
        - Self-hosted music streaming service
      </span>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();

    return {
      titleTemplate: asPath !== '/' ? '%s | Soundise' : 'Docs | Soundise',
      defaultTitle: 'Docs | Soundise',
      description,
      canonical: url,
      twitter: {
        cardType: 'summary_large_image',
        site: '@soundiseapp',
        handle: '@soundiseapp',
      },
      openGraph: {
        url,
        type: 'website',
        title: 'Docs | Soundise',
        description,
      },
    };
  },
  head: () => {
    const { locale } = useRouter();

    return (
      <>
        <meta name="language" content={locale} />

        <meta
          name="keywords"
          content="Soundise, Documentation, React, Next.js, Nextra, Self-hosted, Streaming service, Music streaming service"
        />

        <meta name="author" content="Soundise" />
        <meta name="copyright" content="Soundise" />

        <meta name="rating" content="general" />
        <meta name="rating" content="safe for kids" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="3 days" />

        <meta
          name="theme-color"
          content="#FFFFFF"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />

        <meta
          property="og:image"
          content="https://assets.soundise.com/web-assets/seo-dark.png"
          key="og image"
        />

        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content="Docs | Soundise" />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://assets.soundise.com/web-assets/seo-dark.png"
          key="tw image"
        />
      </>
    );
  },
};

export default theme;
