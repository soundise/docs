/** @type {import('next').NextConfig} */
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
});

export default withNextra({
  reactStrictMode: true,
  trailingSlash: true,
});
